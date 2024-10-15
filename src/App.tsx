import "./globals.css";
import { Container } from "./components/ui/container";
import { ValidationReport } from "./modules/validationReport";
import { useEffect, useMemo, useState } from "react";
import { IValidationRule, validatePasswordStrength } from "password-strength-analyzer";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { MetricsDisplay } from "./modules/metricsDisplay";

function App() {
  const [score, setScore] = useState(0);
  const [validationResult, setValidationResult] = useState<Array<IValidationRule>>([]);
  const [entropy, setEntropy] = useState(0);
  const [isShowValidationResult, setIsShowValidationResult] = useState(false);
  const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(true);

  const formSchema = z.object({
    password: z.string().refine(
      (password: string) => {
        const { isValid } = validatePasswordStrength(password);
        return isValid;
      },
      { message: "Password does not meet the requirements" }
    ),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
    },
    mode: "onChange",
  });

  const password = form.watch("password");

  const validationData = useMemo(() => {
    if (password.length > 0) {
      setIsShowValidationResult(true);
      return validatePasswordStrength(password);
    }
    setIsShowValidationResult(false);
    return { validationResult: [], score: 0, isValid: false, entropy: 0 };
  }, [password]);

  useEffect(() => {
    const { validationResult: currentValidationResult, score: currentScore, entropy: currentEntropy } = validationData;
    setValidationResult(currentValidationResult);
    setScore(currentScore);
    setEntropy(currentEntropy);
  }, [password, validationData]);

  function onSubmit() {
    alert("Password meets all the requirements.");
  }

  return (
    <Container>
      <div className="flex flex-col gap-5 w-full mt-40">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-y-2">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input className="w-full pr-10" type={isVisiblePassword ? "text" : "password"} placeholder="Enter your password" {...field} />
                      <button className="absolute top-[50%] translate-y-[-50%] right-2 p-2 " type="button" onClick={() => setIsVisiblePassword(!isVisiblePassword)}>
                        {isVisiblePassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </Form>
        {isShowValidationResult ? <ValidationReport validationResult={validationResult} rating={score} /> : null}
        <MetricsDisplay params={{ entropy, score }} />
      </div>
    </Container>
  );
}

export default App;

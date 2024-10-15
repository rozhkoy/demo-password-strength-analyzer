import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RatingScale } from "@/components/ui/ratingScale";
import { ValidationResultList } from "@/components/ui/validationResultList";
import { IValidationRule } from "password-strength-analyzer";

export interface ValidationReport {
  validationResult: IValidationRule[];
  rating: number;
}

export const ValidationReport: React.FC<ValidationReport> = ({ validationResult, rating }) => {
  return (
    <Card className="w-max-[280px] fade-in">
      <CardHeader>
        <CardTitle>Password security check</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        <p className="text-sm font-medium leading-none">Password strength</p>
        <RatingScale n={5} rating={rating} />
      </CardContent>
      <CardContent className="grid gap-3">
        <p className="text-sm font-medium leading-none">Password should be:</p>
        <ValidationResultList result={validationResult} />
      </CardContent>
    </Card>
  );
};

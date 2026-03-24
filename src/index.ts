import { buildBmiResponse } from './additional_module';

// Simulated inputs from a route and request body/query, now as numbers
const patientIdFromRoute: number = 123;
const heightFromRequestCm: number = 170; // height in centimeters
const weightFromRequestKg: number = 65;  // weight in kilograms

// Build the BMI response using properly typed numeric arguments
const bmiResponse = buildBmiResponse(
  patientIdFromRoute,
  heightFromRequestCm,
  weightFromRequestKg
);

// Should log something like: { patientId: 123, bmi: 22.49... }
console.log(bmiResponse);

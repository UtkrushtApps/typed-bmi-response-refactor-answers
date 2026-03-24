export interface BmiResponse {
  /** Numeric identifier of the patient */
  patientId: number;
  /** Body Mass Index value calculated from height and weight */
  bmi: number;
}

/**
 * Compute BMI from numeric height in centimeters and weight in kilograms.
 *
 * Formula: BMI = weightKg / (heightM^2)
 * where heightM is heightCm converted to meters.
 */
export function computeBMI(heightCm: number, weightKg: number): number {
  if (heightCm <= 0) {
    throw new Error('Height must be greater than zero');
  }

  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);

  return bmi;
}

/**
 * Build a typed BMI response object for a given patient.
 */
export function buildBmiResponse(
  patientId: number,
  heightCm: number,
  weightKg: number
): BmiResponse {
  const bmi = computeBMI(heightCm, weightKg);

  const response: BmiResponse = {
    patientId,
    bmi,
  };

  return response;
}

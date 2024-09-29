export type ServicesProps = {
  title: string;
  image: string;
  slug: string;
};

export type RegisterInputProps = {
  fullName: string;
  phone: string;
  email: string;
  password: string;
  role: any;
  plan: any;
};

export type LoginInputProps = {
  email: string;
  password: string;
};

export type StepFormProps = {
  page: string;
  title: string;
  description: string;
  userId?: string;
  nextPage?: string;
  formId?: string;
};

export type BioDataFormProps = {
  firstName: string;
  lastName: string;
  middleName?: string;
  dob?: any;
  userId: string | undefined;
  gender: string;
  page: string;
  trackingNumber: string;
};

export type ContactInfoFormProps = {
  phone: string;
  email: string;
  city: string;
  state: string;
  country: string;
  page: string;
};

export type ProfileFormProps = {
  profilePicture?: string;
  bio: string;
  page: string;
  medicalLicense?: string;
  medicalLicenseExpiration?: any;
  yearsOfExperience: number;
}
export type EducationFormProps = {
  medicalSchool: string;
  graduationYear: number;
  primarySpecialization: string;
  boardCertificates: any;
  otherSpecialties: string[];
  page: string;
};

export type PracticeFormProps = {
  hospitalName: string;
  hospitalAddress: string;
  hospitalContact: string;
  hospitalEmail: string;
  hospitalWebsite: string;
  hospitalHoursOfOperation: string;
  insuranceAccepted: string;
  servicesOffered: any;
  languageSpoken: string[];
  page: string;
}

export type AdditionalFormProps = {
  educationHistory: string;
  research: string;
  accomplishments: string;
  additionDocs: any;
  page: string;
}
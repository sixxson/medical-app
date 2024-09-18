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
};

export type BioDataFormProps = {
  firstName: string;
  lastName: string;
  middleName?: string;
  dob?: Date;
  userId: string | undefined;
  gender: string;
  page: string;
  trackingNumber: string;
};

export type ContactInfoFormProps = {
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  page: string;
};

export type ProfileFormProps = {
  profilePicture?: string;
  bio: string;
  page: string;
  medicalLicense: string;
  medicalLicenseExpiration?: Date;
  yearsOfExperience: string;
}
export type EducationFormProps = {
  medicalSchool: string;
  graduationYear: number;
  primarySpecialization: string;
  otherSpecialties: string[];
  boardCertificates: string[];
  page: string;
};

export type PracticeFormProps = {
  hospitalName: string;
  hospitalAddress: string;
  hospitalContact: string;
  hospitalEmail: string;
  hospitalWebsite: string;
  hospitalHoursOfOperation: string;
  insuranceAccepted: boolean;
  servicesOffered: string[];
  languageSpoken: string[];
  page: string;
}

export type AdditionalFormProps = {
  educationHistory: string;
  research: string;
  accomplishments: string;
  additionDocs: string[];
  page: string;
}
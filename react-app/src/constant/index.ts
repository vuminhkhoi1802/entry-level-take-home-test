export const url = "http://localhost:3001/sessions";

export enum Status {
  OFFERING = "OFFERING",
  RUNNING = "RUNNING",
  OFFBOARDING = "OFFBOARDING",
}

interface Program {
  id: string;
  display_title: string;
  thumbnail_img_url: string;
  short_title: string;
}

export interface Sessions {
  id: string;
  name: string;
  status: Status;
  start_date: string;
  end_date: string;
  program: Program[];
}

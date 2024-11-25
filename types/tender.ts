export interface Tender {
  _id: string;
  title: string;
  description: string;
  deadline: string;
  openingDate: string;
  closingDate: string;
  pdfDocument?: {
    asset?: {
      url?: string;
    };
  };
}

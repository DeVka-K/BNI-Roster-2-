export interface MemberDetails {
    id: number;
    name: string;
    company: string;
    email: string;
    phone: string;
    category: string;
    memberPhoto: File | null;
    companyPhoto: File | null;
  }
  export interface ChapterDetails {
    chapterId: number;
    chapterName: string;
    location: string;
    memberSize: number;
    regionalRank: string;
    allIndiaRank: string;
    globalRank: string;
    chapterLogo: File | null;
  }
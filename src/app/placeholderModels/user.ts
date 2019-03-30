export interface IUser {
  profile: {
    fname: string;
    lname: string;
    email: string;
    phoneNumber?: string;
    oneLineBio?: string;
    multiLineBio?: string;
    currentPlaceOfWork?: string;
    birthday?: number;
    resumeUrl?: string;
    blogUrl?: string;
    githubUrl?: string;
    linkedInUrl?: string;
    bannerImageUrl?: string;
  };
  emailResetDigest?: string;
}

export const userPlaceholder: IUser = {
  profile: {
      fname: 'Patrick'
    , lname: 'Pimentel'
    , phoneNumber: '702.443.8242'
    , email: 'spimentel3@mail.csuchico.edu'
    , linkedInUrl: 'www.linkedin.com/in/spimentel3'
    , githubUrl: 'www.github.com/spimentel3'
    , blogUrl: 'spimentel3.blogspot.com'
    , oneLineBio: 'Full Stack Web Engineer at Theia Interactive. Passionate about all things web, user experience design, and keyboards!'
    , multiLineBio: ''
    , currentPlaceOfWork: 'Theia Interactive'
    , birthday: 833068800
  }
};

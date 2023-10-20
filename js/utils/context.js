// * API KEY from MOCKAPI
// * Userpost Response
const USER_POST_API = 'https://651d09d644e393af2d590b6d.mockapi.io/api/v1/userPost';
// * User Accout Response
const USER_API = 'https://651d09d644e393af2d590b6d.mockapi.io/api/v1/account';

// format Date
const formatDate = (date) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
    timeZone: 'Asia/Jakarta',
  };

  return new Date(date).toLocaleDateString('id-ID', options);
  // return new Intl.DateTimeFormat('id-ID', options).format(new Date(date));
};

export { formatDate, USER_POST_API, USER_API };

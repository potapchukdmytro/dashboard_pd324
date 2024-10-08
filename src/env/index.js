const REMOTE_API_HOST_NAME = process.env.REACT_APP_API_URL;
const REMOTE_HOST_NAME = process.env.REACT_APP_SERVER_URL;
const USER_IMAGE = process.env.REACT_APP_USER_IMAGE;

const APP_ENV = {
    REMOTE_API_HOST_NAME: REMOTE_API_HOST_NAME,
    REMOTE_HOST_NAME: REMOTE_HOST_NAME,
    USER_IMAGE: USER_IMAGE
};

export { APP_ENV };
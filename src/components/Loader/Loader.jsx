import { Bars } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Bars
      height={88}
      width={88}
      wrapperStyle={{
        width: '80px',
        margin: 'auto',
      }}
     
      color="#4fa94d"
      ariaLabel="bars-loading"
      visible={true}
    />
  );
};

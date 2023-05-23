export const Add = ({ width = '20', height = '20', className }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.25 10H13.75M10 6.25V13.75M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z'
        stroke='#5E718D'
        stroke-width='1.5'
        stroke-linecap='round'
      />
    </svg>
  );
};

export const RightArr = ({ width = '18', height = '16', className }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 18 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0.75 8H17.25M17.25 8L10.5 1.25M17.25 8L10.5 14.75'
        stroke='#5E718D'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const Trash = ({ width = '18', height = '20', className }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 18 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11.2499 8.75V14.75M6.74988 8.75V14.75M17.2495 4.25L0.749512 4.25001M15.7499 4.25V18.5C15.7499 18.6989 15.6709 18.8897 15.5302 19.0303C15.3896 19.171 15.1988 19.25 14.9999 19.25H2.99988C2.80097 19.25 2.6102 19.171 2.46955 19.0303C2.3289 18.8897 2.24988 18.6989 2.24988 18.5V4.25M12.7499 4.25V2.75C12.7499 2.35218 12.5918 1.97064 12.3105 1.68934C12.0292 1.40804 11.6477 1.25 11.2499 1.25H6.74988C6.35205 1.25 5.97052 1.40804 5.68922 1.68934C5.40791 1.97064 5.24988 2.35218 5.24988 2.75V4.25'
        stroke='#5E718D'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

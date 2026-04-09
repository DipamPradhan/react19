export const CustomButton = ({ name, text }) => {
  const handleClick = () => {
    console.log(`Hey ${name} you clicked ${text}`);
  };

  const handleLike = () => {
    
  };
  return <button onClick={handleClick}>{text}</button>;
};

{
  /* <button onClick={() => alert("Thanks for Liking!")}>Like</button> */
}

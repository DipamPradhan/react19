import { ActionButton } from "./ActionButton";
export const Newsletter = () => {
  const handleSubscribe = () => {
    console.log("Thank you for Subscribing");
  };
  return (
    <div>
      <h2>Subscribe to Newsletter</h2>
      <ActionButton text="Subscribe" onClick={handleSubscribe} />
    </div>
  );
};

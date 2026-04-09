export const UserDetails = ({
  name,
  isOnline,
  hideOffline,
  isPremium,
  isNew,
  role,
}) => {
  if (hideOffline && !isOnline) {
    return null;
  }

  let roleBadge = null;
  if (role === "admin") roleBadge = <span>🔧Admin</span>;
  else if (role === "vip") roleBadge = <span>💎Vip</span>;
  else if (role === "moderator") roleBadge = <span>➗Manage</span>;
  return (
    <div>
      <h3>
        {name}
        {isPremium && <span>⭐</span>}
        {isNew && <span>🎉</span>}
        {roleBadge}
      </h3>
      <span>{isOnline ? "💚Online" : "❤️Offline"}</span>
      <p>{isOnline ? "Available for Chat" : "UnAvailable for Chat"}</p>
      {isOnline ? (
        <button>Send Message</button>
      ) : (
        <small>Check Back Later</small>
      )}
    </div>
  );
};

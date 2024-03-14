export default function ImageCard({
  image: { urls, description, alt_description, user, likes },
  openModal,
}) {
  return (
    <div>
      <img
        src={urls.small}
        alt={description}
        onClick={() =>
          openModal({
            alt_description,
            imgUrl: urls.regular,
            user,
            likes,
            description,
          })
        }
      />
    </div>
  );
}

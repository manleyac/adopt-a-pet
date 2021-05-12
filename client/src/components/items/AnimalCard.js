const cardPlaceholder = "https://via.placeholder.com/300";

const AnimalCard = (props) => {
  const { pic, name, gender, age, description, contact, breeds, link } = props;
  const email = contact.email ? contact.email : "Not Listed";
  const phone = contact.phone ? contact.phone : "Not Listed";
  const breed = breeds.mixed ? `${breeds.primary} mixed` : breeds.primary;
  const text = description ? description : "No description given.";
  let imgSrc;
  try {
    if ("small" in pic) {
      imgSrc = pic.small;
    } else {
      imgSrc = cardPlaceholder;
    }
  } catch (err) {
    imgSrc = cardPlaceholder;
  }
  return (
    <div className="m-3 bg-white border-2 border-gray-300 p-5 rounded-md">
      <a target="_blank" rel="noreferrer" href={link}>
        <div className="h-full flex flex-col justify-between">
          <img className="w-full" src={imgSrc} alt={name} />
          <div>
            <h2 className="text-center text-xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-600">{text}</p>
            <p>{`Breed: ${breed}`}</p>
            <div className="flex justify-between text-gray-900 font-medium">
              <p>{`Gender: ${gender}`}</p>
              <p>{`Age: ${age}`}</p>
            </div>

            <p>{`Email: ${email}`}</p>
            <p>{`Phone: ${phone}`}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default AnimalCard;

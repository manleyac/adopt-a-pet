import React from "react";

const listPlaceholder = "https://via.placeholder.com/100";

const AnimalListItem = (props) => {
  const { name, link, pic, description } = props;
  const text = description ? description : "No description given.";
  let imgSrc;
  try {
    if ("small" in pic) {
      imgSrc = pic.small;
    } else {
      imgSrc = listPlaceholder;
    }
  } catch (err) {
    imgSrc = listPlaceholder;
  }
  return (
    <div className="my-2 w-full lg:max-w-3xl bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg justify-center">
      <a target="_blank" rel="noreferrer" href={link}>
        <div className="flex">
          <div className="flex flex-initial items-center">
            <img
              src={imgSrc}
              className="rounded-md border-2 border-gray-300"
              alt={name}
            />
          </div>

          <div className="w-full">
            <h2 className="text-center text-xl font-semibold mb-2">{name}</h2>
            <p className="text-center">{text}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default AnimalListItem;

import ReviewForm from "./ReviewForm";

const Reviews = () => {
  return (
    <div>
      <div className="border p-2">
        <span className="text-yellow-500">★★★★★</span>
        <div className="flex gap-5">
          <p>Selim</p>
          <span>|</span>
          <p>02 Apr, 2021</p>
        </div>
        <p className="text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, in
          animi itaque sit eveniet neque porro iure aspernatur ex error ipsam
          ab, voluptate, officia repellat.
        </p>
      </div>
      <ReviewForm />
    </div>
  );
};

export default Reviews;

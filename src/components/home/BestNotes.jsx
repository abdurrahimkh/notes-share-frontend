import BestNotesPic from "../../assets/images/best_notes.svg";

const BestNotes = () => {
  return (
    <div className="flex gap-10 items-center  p-14 mt-3">
      <div>
        <p>Share Your Endless Knowledege </p>
      </div>
      <div>
        <img className="max-w-sm " src={BestNotesPic} />
      </div>
    </div>
  );
};

export default BestNotes;

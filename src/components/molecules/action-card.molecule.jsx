function ActionCardMolecule({ handleEdit, handleDelete }) {
  return (
    <div className=" absolute bg-white min-w-20 shadow-md rounded-md right-0 mt-1 flex flex-col gap-1 px-2 py-1">
      <span
        onClick={handleEdit}
        role="button"
        className="rounded-md hover:bg-gray-100 p-1 text-sm"
      >
        Edit
      </span>
      <span
        onClick={handleDelete}
        role="button"
        className="rounded-md hover:bg-gray-100 p-1"
      >
        Delete
      </span>
    </div>
  );
}

export default ActionCardMolecule;

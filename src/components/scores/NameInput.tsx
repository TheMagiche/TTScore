import React from "react";

type NameInputControlComponentProps = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

const NameInputControlComponent: React.FC<NameInputControlComponentProps> = ({
  name,
  setName,
}: NameInputControlComponentProps) => {
  return (
    <>
      <div className="input-container">
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default NameInputControlComponent;

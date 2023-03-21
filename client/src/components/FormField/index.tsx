import { When } from "react-if";

interface FormFieldProps {
  labelName: string;
  type: string;
  name: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isSurpriseMe?: boolean;
  handleSurpriseMe?: () => void;
}

export default function FormField({
  labelName,
  type,
  name,
  placeholder,
  handleChange,
  value,
  isSurpriseMe,
  handleSurpriseMe,
}: FormFieldProps) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {labelName}
        </label>
        <When condition={isSurpriseMe}>
          <button
            className="font-semibold text-xs py-1 px-2 rounded-[5px] text-black bg-grayBg"
            type="button"
            onClick={handleSurpriseMe}
          >
            Surprise me
          </button>
        </When>
      </div>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lightBlue focus:border-lightBlue outline-none block w-full p-3"
      />
    </div>
  );
}

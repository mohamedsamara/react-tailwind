import { ButtonVariants, HeadingTypes, SpinnerVariants } from 'styles/theme';
import Button from 'components/common/Button';
import Heading from 'components/common/Heading';
import Spinner from 'components/common/Spinner';

interface IHeading {
  as: HeadingTypes;
  text: string;
}

interface IButton {
  variant: ButtonVariants;
  text: string;
}

interface ISpinner {
  variant: SpinnerVariants;
}

const HEADINGS: IHeading[] = [
  {
    as: 'h1',
    text: 'React Tailwind CSS - H1',
  },
  {
    as: 'h2',
    text: 'React Tailwind CSS - H2',
  },
  {
    as: 'h3',
    text: 'React Tailwind CSS - H3',
  },
  {
    as: 'h4',
    text: 'React Tailwind CSS - H4',
  },
  {
    as: 'h5',
    text: 'React Tailwind CSS - H5',
  },
  {
    as: 'h6',
    text: 'React Tailwind CSS - H6',
  },
];

const BUTTONS: IButton[] = [
  {
    variant: 'primary',
    text: 'Primary',
  },
  {
    variant: 'secondary',
    text: 'Secondary',
  },
  {
    variant: 'basic',
    text: 'Basic',
  },
  {
    variant: 'danger',
    text: 'Danger',
  },
];

const SPINNERS: ISpinner[] = [
  {
    variant: 'primary',
  },
  {
    variant: 'secondary',
  },
  {
    variant: 'basic',
  },
];

const Demo = () => {
  return (
    <>
      <div className="mb-10">
        <Heading as="h1" className="pb-4 mb-6 border-b-2 border-gray-200">
          Headings
        </Heading>
        <div className="flex flex-col">
          {HEADINGS.map((h, idx) => (
            <Heading key={idx} as={h.as} className="mb-4">
              {h.text}
            </Heading>
          ))}
        </div>
      </div>
      <div className="mb-10">
        <Heading as="h1" className="pb-4 mb-6 border-b-2 border-gray-200">
          Buttons
        </Heading>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {BUTTONS.map((btn, idx) => (
            <Button key={idx} variant={btn.variant} className="mb-4">
              {btn.text}
            </Button>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <Heading as="h1" className="pb-4 mb-6 border-b-2 border-gray-200">
          Spinners
        </Heading>
        <div className="flex flex-col">
          {SPINNERS.map((spn, idx) => (
            <Spinner
              key={idx}
              variant={spn.variant}
              size="lg"
              className="mb-4"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Demo;

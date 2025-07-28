import { title } from "process";

interface PropTypes {
  title: string;
}

const PageHead = (props: PropTypes) => {
  const { title } = props;
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
    </>
  );
};

export default PageHead;

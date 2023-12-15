export interface CoursePartBase {
    name: string;
    exerciseCount: number;
}

interface Content {
    courseParts: Array<CoursePartBase>;
}

const Content = (props : Content) => {
  return (
    <>
    {props.courseParts.map((part) => {
        return <p key={part.name}>{part.name} {part.exerciseCount}</p>
    })}
    </>
  );
};

export default Content;

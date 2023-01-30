import styled from "styled-components";
import format from "date-fns/format";
import Form from "./Form";
import Entry from "./Entry";

export default function BelowCalendar({
  allEntries,
  date,
  onUpdateEntries,
  onHideForm,
  onDeleteEntry,
}) {
  const currentEntry = allEntries.find(
    (entry) => entry.date == format(new Date(date), "yyyy-MM-dd")
  );

  return (
    <StyledContainer>
      {currentEntry?.mood ? (
        <Entry
          currentEntry={currentEntry}
          onDeleteEntry={onDeleteEntry}
          onHideForm={onHideForm}
        />
      ) : (
        <Form
          date={date}
          onUpdateEntries={onUpdateEntries}
          onHideForm={onHideForm}
        />
      )}
    </StyledContainer>
  );
}

const StyledContainer = styled.section`
  margin-bottom: 10vh;
`;

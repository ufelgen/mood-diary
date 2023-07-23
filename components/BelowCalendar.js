import format from "date-fns/format";
import NewEntry from "./NewEntry";
import Entry from "./Entry";
import EditEntry from "./EditEntry";

export default function BelowCalendar({
  allEntries,
  date,
  onUpdateEntries,
  onHideForm,
  onDeleteEntry,
  onUpdateEntry,
  editing,
  toggleEditMode,
}) {
  const currentEntry = allEntries.find(
    (entry) => entry.date == format(new Date(date), "yyyy-MM-dd")
  );

  return (
    <>
      {currentEntry?.mood && editing && (
        <EditEntry
          currentEntry={currentEntry}
          toggleEditMode={toggleEditMode}
          onUpdateEntry={onUpdateEntry}
        />
      )}
      {currentEntry?.mood && !editing && (
        <Entry
          currentEntry={currentEntry}
          onDeleteEntry={onDeleteEntry}
          onHideForm={onHideForm}
          onToggleEditMode={toggleEditMode}
        />
      )}
      {!currentEntry?.mood && !editing && (
        <NewEntry
          date={date}
          onUpdateEntries={onUpdateEntries}
          onHideForm={onHideForm}
        />
      )}
    </>
  );
}

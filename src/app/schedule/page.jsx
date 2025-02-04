import EventSchedule from "@/components/EventSchedule";
import FAQ from "@/components/Faq";
import "@/sass/pages/schedule.scss";

const Schedule = () => {
  return (
   <div className="scheduleSection">
   <EventSchedule />
   <FAQ />
   </div>
  )
}

export default Schedule
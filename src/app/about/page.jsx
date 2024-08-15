import FooterComponent from "@/components/Footer";
import { UsersFour } from "@phosphor-icons/react/dist/ssr";

const Page = () => {
  return (
    <>
      <div className="bg-color-secondary text-center py-6 text-color-white text-4xl">
        <h1>Our Team</h1>
      </div>
      <div className="p-6 text-justify">
        <h1 className="font-semibold text-lg">
          Sydney Speech Clinic is a professional, positive and supportive speech
          pathology and occupational therapy service located in Lane Cove on the
          lower north shore. We assist children and adults of all ages with
          speech, language, literacy, learning, social, feeding, attention,
          self-regulation, fine and gross motor and self-care skills.
        </h1>
        <h1 className="text-4xl my-8 text-color-primary font-bold">Speech Therapists Teams</h1>
        <div className="flex flex-col md:flex-row p-4">
          <div className="md:flex-col mb-8">
            <h1 className="text-2xl text-color-secondary font-bold text-left mb-4">Catherine Lavery - Clinic Director and Speech Pathologist</h1>
            <h2 className="font-semibold text-lg p-2">
              With over 20 years of clinical experience as a Speech Pathologist,
              Catherine has worked both in the UK and Australia with a wide
              range of client groups experiencing speech, language,
              communication and swallowing difficulties. She has worked across a
              number of settings including day care centres, preschools,
              schools, hospitals, specialist rehabilitation centres and
              community clinics.</h2>
              <h2 className="font-semibold text-lg p-2">Catherine has extensive experience and a
              special interest in teaching and training others about the impact
              of speech, language and swallowing difficulties. She has devised
              and implemented training programs for nurses, medical students,
              teachers and speech pathology students. </h2> 
              <h2  className="font-semibold text-lg p-2">
              Alongside her private
              clinical caseload, Catherine has also worked as a Clinical
              Educator for the Australian Catholic University (ACU) in North
              Sydney supervising speech pathology students undertaking the
              practical component of their training whilst on professional
              placements within schools. Catherine lives in Lane Cove with her
              husband and three children. She is an active member of the local
              community and has strong links with local day care centres,
              preschools, schools and health service providers.
              </h2>
            
          </div>
          <img className="md:pl-6" src="https://www.sydneyspeechclinic.com.au/ssc/wp-content/uploads/2019/11/022A1681.jpg"></img>
        </div>
      </div>
      <FooterComponent/>
    </>
  );
};

export default Page;

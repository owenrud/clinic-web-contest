import FooterComponent from "@/components/Footer";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="w-full bg-color-primary">
        <h1 className="text-center py-4 text-color-white text-3xl">
          Group Therapy Programs
        </h1>
      </div>

      <div className="flex flex-col space-y-4 p-4">
        <h2 className="text-left">
          Group sessions promote peer learning in an interactive, motivating and
          supportive group environment.{" "}
        </h2>
        <h2>
          Our group programs are designed to supplement the learning a child is
          already doing (e.g. at school, at home, or in 1-on-1 speech pathology)
          by building on existing skills. Most importantly, these groups
          encourage the children in the group to learn from one another. We
          often find that children thrive in this group setting, and come out of
          the program feeling confident and empowered to apply the new skills
          that they have learnt. Group programs offer a reliable and affordable
          way of maximising your child's exposure to learning.{" "}
        </h2>
        <h2>
          All of our programs are evidence-based, and carefully planned and
          facilitated by qualified speech pathologists and/or occupational
          therapists.
        </h2>
      </div>
        <h2 className="text-color-secondary text-center text-2xl font-bold mb-8">Programs</h2>
        <div className="grid grid-cols- 1items-center justify-center space-y-4 space-x-4 md:grid-cols-3">
       
                <Link className="flex flex-col items-center justify-center mt-4" href="/group-programs">
                <img src="http://www.sydneyspeechclinic.com.au/ssc/wp-content/uploads/2022/05/7-9-group.jpg"></img>
            <h2 className="font-bold text-color-secondary text-2xl text-wrap text-center px-4 md:px-12">Term Time 7-9 Year Olds Social Group Program</h2>
            
                </Link>

                <Link className="flex flex-col items-center justify-center mt-4" href="#">
                <img src="http://www.sydneyspeechclinic.com.au/ssc/wp-content/uploads/2022/05/7-9-group.jpg"></img>
            <h2 className="font-bold text-color-secondary text-2xl text-wrap text-center px-4 md:px-12">Term Time 7-9 Year Olds Social Group Program</h2>
            
                </Link>
                <Link className="flex flex-col items-center justify-center mt-4" href="#">
                <img src="http://www.sydneyspeechclinic.com.au/ssc/wp-content/uploads/2022/05/7-9-group.jpg"></img>
            <h2 className="font-bold text-color-secondary text-2xl text-wrap text-center px-4 md:px-12">Term Time 7-9 Year Olds Social Group Program</h2>
            
                </Link>
                <Link className="flex flex-col items-center justify-center mt-4" href="#">
                <img src="http://www.sydneyspeechclinic.com.au/ssc/wp-content/uploads/2022/05/7-9-group.jpg"></img>
            <h2 className="font-bold text-color-secondary text-2xl text-wrap text-center px-4 md:px-12">Term Time 7-9 Year Olds Social Group Program</h2>
            
                </Link>
                <Link className="flex flex-col items-center justify-center mt-4" href="#">
                <img src="http://www.sydneyspeechclinic.com.au/ssc/wp-content/uploads/2022/05/7-9-group.jpg"></img>
            <h2 className="font-bold text-color-secondary text-2xl text-wrap text-center px-4 md:px-12">Term Time 7-9 Year Olds Social Group Program</h2>
            
                </Link>
                <Link className="flex flex-col items-center justify-center mt-4" href="#">
                <img src="http://www.sydneyspeechclinic.com.au/ssc/wp-content/uploads/2022/05/7-9-group.jpg"></img>
            <h2 className="font-bold text-color-secondary text-2xl text-wrap text-center px-4 md:px-12">Term Time 7-9 Year Olds Social Group Program</h2>
            
                </Link>
                <Link className="flex flex-col items-center justify-center mt-4" href="#">
                <img src="http://www.sydneyspeechclinic.com.au/ssc/wp-content/uploads/2022/05/7-9-group.jpg"></img>
            <h2 className="font-bold text-color-secondary text-2xl text-wrap text-center px-4 md:px-12">Term Time 7-9 Year Olds Social Group Program</h2>
            
                </Link>

            
      </div>
      <FooterComponent/>
    </>
  );
};
export default Page;

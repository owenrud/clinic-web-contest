import FooterComponent from "@/components/Footer";

const Page = () => {
  return (
    <>
      <h1 className="text-center text-color-white text-xl font-bold py-4 bg-color-primary">
        Article 1
      </h1>

      <div className="flex flex-col p-8 mx-4">
        <h2 className="text-justify">
          Christmas and the holiday season are fast approaching! This is often a
          time when we take a break from our normal routine and so language or
          speech practice can often take a backseat too. We have put together a
          few ideas about how you can continue to support your child in their
          language and speech sound development over this holiday season!
        </h2>
        <div className="flex flex-col border shadow shadow-md items-center justify-center shadow-color-primary p-8 rounded-lg mt-8">
          <div className="flex flex-wrap md:flex-row ">
            <img
              className="w-48 h-48 md:w-64 md:h-64 rounded"
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/happy-family-bake-christmas-cookies-royalty-free-image-1571390977.jpg"
            ></img>
            <img src="https://pngimg.com/uploads/bauble/bauble_PNG377.png"></img>
          </div>
          <div className="text-left space-y-4">
            <h2 className="font-semibold">1. Decorate together</h2>
            <p>
              If you set up a Christmas tree or make a gingerbread house, you
              can take turns giving each other clues about which decoration to
              choose next. “Can you find the big red bauble with gold spots on
              it?”
            </p>

            <h2 className="font-semibold">2. Cook a recipe together</h2>
            <p>
              Children often like to help in the kitchen at Christmas! You can
              work on ‘first …. then’ by giving them the directions. Perhaps
              your reluctant reader might be motivated to help you figure out
              what you need to do to make a delicious treat!
            </p>

            <h3 className="font-semibold">3. Use photos and videos</h3>
            <p>
              Holidays are often the chance to take some pictures or videos
              together as a family. Invite your child to be the
              director/photographer or narrator in the video. Use the images to
              prompt your child to share with a friend or loved one about their
              holidays.
            </p>

            <h4 className="font-semibold">4. Gift inspiration</h4>
            <p>
              Think about language opportunities when selecting toys these
              holidays. Lots of toys for our little ones have parts that open or
              close, turn on or off or need an adult’s help to make them work.
              Use each of these opportunities to model to your child the
              language goals that they are working on. Santa might get some
              inspiration from the language goals you’ve been targeting in
              session!
            </p>

            <h5 className="font-semibold">5. Play board games</h5>
            <p>
              Describing games can be a great gift which are fun for the whole
              family and can help children work on their speech and language
              goals. Games like Hedbanz, Guess Who, and Taboo target vocabulary
              and word associations to help others guess what we are talking
              about. If your child is working on speech sounds, find some target
              words which you can use in play together. Perhaps you need to spin
              the wheel or roll the dice to have your turn and practice your
              speech sounds.
            </p>
          </div>
          <h2 className="mt-12">
            We hope these tips help you to support your child over the summer
            holidays! Remember, after a big year we all need a break and to give
            ourselves time to recover. So take the pressure off and enjoy the
            holiday season sprinkled with some speech and language practice!
            Have fun!
          </h2>
        </div>
      </div>
      <FooterComponent/>
    </>
  );
};
export default Page;

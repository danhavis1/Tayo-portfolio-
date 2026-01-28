import { Book, Send } from "lucide-react";
import { useState } from "react";

export default function AboutMe() {
      const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);


  const teach = [
    {
      about: "Exam Preparation",
      skill:
        "Strategic preparation for standardized tests, finals, and competitive exams with proven techniques.",
      image: "/public/icon1.png",
    },
    {
      about: "Critical Thinking",
      skill:
        "Fostering analytical skills and problem-solving abilities beyond textbook learning.",
      image: "/public/icon2.png",
    },
    {
      about: "Study Planning",
      skill:
        "Customized study schedules and time management strategies tailored to individual needs.",
      image: "/public/icon3.png",
    },
    {
      about: "Confidence Building ",
      skill:
        "Developing mental resilience and positive mindset for academic challenges.",
      image: "/public/icon4.png",
    },
  ];

  const test = [
    {
      about:
        "The study strategies i learned helped me not just in high school ,  but continue to serve me in university , Miss Temitato dosen't just teach - she empowers",
      name: "Marcus Johnson",
      role: "Forner Student ",
    },
    {
      about:
        "Miss Temitayo transofrmed my son approach to learning . His grade improved from C's to A's . But more importantly he now genuinely enjoy studying",
      name: "Emily Shein",
      role: " Parent of High School Student",
    },
    {
      about:
        "My daughter went from test anxiety to confident test-taker in just three months. The personalized attention makes all the difference",
      name: "Faith Gbadamosi",
      role: "Parent Of High School Student",
    },
  ];



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


   const handleSubmit = async () => {
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // Using Web3Forms - FREE email service
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '', 
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
         
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly.'
      });
      console.log(error)
    } finally {
      setLoading(false);
    }
  };



  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleSubmit();
    }
  };

  return (
    <div className="bg-whiteBg py-20">
      <div className="container mx-auto">

        <div className="px-4 xl:px-8 lg:grid grid-cols-2 gap-4" id="about">
          <div className="space-y-4">
            <h1 className="text-yellowBg">About Me</h1>
            <h1 className="mt-2 text-deepDark font-bold text-[2.5rem]">
              Passionate About <br />
              Transforming Education
            </h1>
            <p className="text-paleWhite text-sm">
              I am a dedicated and enthusiastic Teacher with a Second Class
              Upper Division Bachelor’s degree in English Education from the
              University of Lagos. I bring over three years of online teaching
              experience. I deliver engaging English Language and Literature
              lessons to students from KS2 to KS4 (ages 7–16). I also
              occasionally provide assignment assistance to college-level
              students. <br /> <br /> Well, I believe that learners are not
              tabula rasa . No learner is a completely empty slate. Every
              student already brings prior knowledge, experiences, and curiosity
              that simply need to be activated and nurtured. This is why my
              teaching approach focuses on developing a genuine love for
              reading, critical thinking, and effective communication through
              interactive activities, in-depth literature analysis, and creative
              writing tasks.
              <br /> <br /> When I’m not teaching, I enjoy sleeping, reading
              books, listening to music, watching movies, or visiting the
              cinema. In fact, I sometimes integrate films and popular culture
              into my lessons to make English Language and Literature more
              relatable, exciting, and enjoyable for my students.
            </p>
          </div>
          <div className="flex flex-col pt-20 lg:pt-10 lg:justify-center lg:item-center h-full">
            <div className="w-[85%] lg:w-[75%] mx-auto lg:mx-0 lg:ml-auto">
              <img src="/testimonial.svg" alt="testimonial" />
              <img
                src="/meticsLg.png"
                alt="metrics"
                className="px-6 hidden lg:block"
              />
              <img
                src="/metricSm.png"
                alt="metrics"
                className="px-4 lg:hidden"
              />
            </div>
          </div>
        </div>


        <div className="mt-20" id="skills">
          <div className="text-center space-y-6">
            <h1 className="text-yellowBg font-medium text-lg">Expertise</h1>
            <h1 className="text-deepDark font-bold text-2xl">
              Skills & Specializations
            </h1>
            <p className="text-sm text-paleWhite lg:w-[40%] mx-auto">
              A comprehensive approach to academic excellence, combining subject
              mastery with proven coaching methodologies.
            </p>
            <p className="text-ashWhite text-xl font-normal  mt-10">
              Academic Subjects
            </p>
          </div>
          <div className="px-8">
            <div className="border border-none bg-white rounded-xl p-3 lg:h-34.75 h-50 lg:grid grid-cols-2 items-center gap-8 lg:gap-8  mt-8">
              <div className="space-y-2">
                <div className="flex justify-between items-center ">
                  <div className="flex gap-3 items-center">
                    <img src="/iconFirst.png" alt="icon" />
                    <h1 className="font-bold">English </h1>
                  </div>
                  <p className="font-medium">100%</p>
                </div>
                <div className="h-6 bg-yellowBg  rounded-full  transition-all duration-1000 ease-out animate-pulse w-full  "></div>
              </div>
              <div className="space-y-2 mt-3">
                <div className="flex justify-between items-center ">
                  <div className="flex items-center gap-3">
                    <img src="/iconSecond.png" alt="icon" />
                    <h1 className="font-bold">Literature</h1>
                  </div>
                  <p className="font-medium">100%</p>
                </div>
                <div className="h-6 bg-yellowBg  rounded-full  transition-all duration-1000 ease-out animate-pulse w-full  "></div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h1 className="mt-20 text-ashWhite text-xl">
              Coaching Specialties
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 mt-8">
              {teach.map((item) => (
                <div
                  className="border border-none rounded-xl bg-white mx-auto w-83.5 lg:w-150 h-42.25 lg:h-38 flex items-start  p-5 gap-3"
                  key={item}
                >
                  <img src={item.image} alt={item.about} />
                  <div className="text-start gap-5">
                    <p className="text-ashWhite text-[1.25rem] lg:text-xl font-normal">
                      {item.about}
                    </p>
                    <p className="text-paleWhite font-light text-[1rem] lg:text-[1.125rem] ">
                      {item.skill}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-20 px-8">
            <h1 className="text-xl font-normal text-ashWhite">
              Teaching Methods & Tools
            </h1>
            <div className="flex flex-col lg:flex-row justify-between items-center rounded-xl gap-6 mt-5">
              <div className="border border-none bg-white w-70 h-14 p-3 rounded-full">
                <h1 className="font-light text-[1.125rem] text-[ashWhite]">
                  One-On-one Sessions
                </h1>
              </div>
              <div className="border border-none bg-white w-70 h-14 p-3 rounded-full">
                <h1 className="font-light text-[1.125rem] text-[ashWhite]">
                  Progress Tracking
                </h1>
              </div>
              <div className="border border-none bg-white w-70 h-14 p-3 rounded-full">
                <h1 className="font-light text-[1.125rem] text-[ashWhite]">
                  Interactive Learning
                </h1>
              </div>
              <div className="border border-none bg-white w-70 h-14 p-3 rounded-full ">
                <h1 className="font-light text-[1.125rem] text-[ashWhite]">
                  Practice Tests
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20" id="record">
          <div className="text-center space-y-3">
            <p className="text-deepYellow font-medium text-lg">Track Record</p>
            <h1 className="text-deepDark text-2xl font-bold">
              Works & Achievements{" "}
            </h1>
            <p className="font-normal text-sm text-paleWhite w-100 mx-auto">
              Teaching certifications and professional experience gained through
              consistent instructional practice
            </p>

            <p className="mt-10 text-ashWhite font-normal text-xl ">
              Certificates
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 mt-8">
              <div className="rounded-xl bg-white mx-auto w-83.5 lg:w-150 flex items-start justify-between p-8 gap-4 h-45">
                <div className="text-start">
                  <h1 className="text-ashWhite text-xl lg:text-xl font-semibold">
                    Teachers Registration Council of Nigeria
                  </h1>
                  <p className="text-paleWhite font-medium text-[1rem] lg:text-[1.125rem]">
                    Certified Teacher
                  </p>
                </div>
                <p className="text-yellowBg font-bold">2025</p>
              </div>
              <div className="rounded-xl bg-white mx-auto w-83.5 lg:w-150 flex items-start justify-between h-45 p-8 gap-3">
                <div className="text-start">
                  <h1 className="text-ashWhite text-xl lg:text-xl font-semibold">
                    HeSolveMaths EduHub{" "}
                  </h1>
                  <p className="text-paleWhite font-medium text-[1rem] lg:text-[1.125rem]">
                    Best English Tutor
                  </p>
                  <p className="text-sm font-medium text-palewhite mt-2">
                    Award in recognition of outstanding contribution and
                    dedicated service
                  </p>
                </div>
                <p className="text-yellowBg font-bold">2025</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20" id="testimonials">
          <div className="text-center space-y-2">
            <p className="text-deepYellow font-medium text-lg">Testimonials</p>
            <h1 className="text-deepDark text-2xl font-bold">
              What Learners and Parents Say{" "}
            </h1>
            <p className="font-normal text-sm text-paleWhite ">
              Real feedback from families who have experienced transformative
              <br /> academic growth
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
              {test.map((item) => (
                <div className="mx-auto w-83.75 lg:w-97.5 h-77.75 lg:h-70 border border-none bg-white rounded-xl p-4 text-start space-y-3">
                  <div class="rating rating-sm gap-2">
                    <input
                      type="radio"
                      class="mask mask-star-2 bg-yellow-400"
                      checked
                    />
                    <input
                      type="radio"
                      class="mask mask-star-2 bg-yellow-400"
                      checked
                    />
                    <input
                      type="radio"
                      class="mask mask-star-2 bg-yellow-400"
                      checked
                    />
                    <input
                      type="radio"
                      class="mask mask-star-2 bg-yellow-400"
                      checked
                    />
                    <input
                      type="radio"
                      class="mask mask-star-2 bg-yellow-400"
                      checked
                    />
                  </div>
                  <p className="text-whiteText">{item.about}</p>
                  <hr className="mt-8 text-whiteBorder" />

                  <div className="mt-10 flex flex-col gap-2">
                    <h1 className="font-medium">{item.name}</h1>
                    <p className="text-ashText">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20" id="contact">
          <div className="flex flex-col justify-center items-center p-3 gap-4 mt-15 ">
            <p className="text-deepYellow font-medium text-lg">Get In Touch</p>
            <h1 className="text-deepDark text-2xl font-bold">
              Let's start your journey{" "}
            </h1>
            <p className="font-normal text-sm text-paleWhite text-center">
              Ready to unlock your academic potential? Reach out for a free{" "}
              <br />
              consultation and let's discuss how I can help you succeed.
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-8 px-8 mt-10">
              <div className="border border-none bg-white rounded-xl w-83.75 lg:w-175 h-160.25 lg:h-145 p-3 ">
                <h1 className="text-black font-medium text-xl">
                  Send a Message
                </h1>
                <form className="pt-8 space-y-8 ">
                  <div className="flex flex-col lg:flex-row justify-between gap-3 mt-4 ">
                    <div className="w-full">
                      <h1 className="font-bold text-sm"> Your Name</h1>
                      <label className="input input-neutral border-slate-100 bg-white text-black rounded-xl shadow-md mt-2">
                        <input
                          className="grow"
                          name="name"
                          type="text"
                          placeholder="Enter your name"
                          value={formData.name} 
              onChange={handleChange}
              onKeyPress={handleKeyPress}
                        />
                      </label>
                    </div>
                    <div className="w-full">
                      <h1 className="font-bold text-sm">Email Address </h1>
                      <label className="input input-neutral border-slate-100 bg-white text-black rounded-xl shadow-md mt-2">
                        <input
                          className="grow"
                          name="email"
                          type="text"
                          placeholder="Enter your email address"
                          value={formData.email} 
              onChange={handleChange}
              onKeyPress={handleKeyPress}
                        />
                      </label>
                    </div>
                  </div>

                  <div className=" w-full ">
                    <h1 className="font-bold text-sm">Subject</h1>
                    <label className="input input-neutral border-slate-100 bg-white text-black rounded-xl shadow-md mt-2 ">
                      <input
                        className=" grow"
                        name="subject"
                        type="text"
                        placeholder="How can i help you ?"
                        value={formData.message} 
              onChange={handleChange}
              onKeyPress={handleKeyPress}
                      />
                    </label>
                  </div>
                  <div className="w-full">
                    <h1 className="font-bold text-sm">Message</h1>
                    <textarea
                      name="message"
                      placeholder="Tell me about your academic goals and how can i help..."
                      className=" w-full   border-slate-100 h-30 p-2 bg-white text-black rounded shadow-md"
                      required
                      value={formData.name} 
              onChange={handleChange}
              onKeyPress={handleKeyPress}
                    ></textarea>
                  </div>
                    {status.message && (
              <div className={`flex items-center gap-2 p-4 rounded-lg ${
                status.type === 'success' 
                  ? 'bg-green-500/20 border border-green-500/50 text-black' 
                  : 'bg-red-500/20 border border-red-500/50 text-red-200'
              }`}>
                {status.type === 'success' ? (
                  <CheckCircle className="h-5 w-5 shrink-0" />
                ) : (
                  <AlertCircle className="h-5 w-5 shrink-0" />
                )}
                <p className="text-sm">{status.message}</p>
              </div>
            )}

                  <button className="btn  bg-yellowBg text-white font-bold rounded-xl w-full"
                  onClick={handleSubmit}
       disabled={loading || !formData.name || !formData.email || !formData.subject || !formData.message}>
                      {loading ? (
                <>
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Send Message
                </>
              )}
                  </button>
                </form>
              </div>

              <div className="border border-none bg-white rounded-xl w-83.75 lg:w-116 lg:h-145 p-3 flex flex-col items-start gap-4">
                <h1 className="font-bold text-2xl">Contact Information</h1>
                <div className="flex justify-between items-center gap-3 p-2 ">
                  <img src="/public/Frame 2085661059 (11).png" />
                  <div>
                    <p className="text-paleWhite font-bold">Phone</p>
                    <p className="font-bold text-ashWhite">+2349040452452</p>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-3 p-2 ">
                  <img src="/public/Frame 2085661059 (12).png" />
                  <div>
                    <p className="text-paleWhite font-bold">Email</p>
                    <p className="font-bold text-ashWhite">
                      d21stcenturytutor@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-3 p-2 ">
                  <img src="/public/Frame 2085661059 (13).png" />
                  <div>
                    <p className="text-paleWhite font-bold">Location</p>
                    <p className="font-bold text-ashWhite">Lagos Nigeria </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

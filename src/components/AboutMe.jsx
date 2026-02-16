import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { useMemo, useState, useRef } from "react";
import {
  useScrollAnimation,
  useStaggeredAnimation,
  useSkillBarAnimation,
} from "../hooks/useScrollAnimation";
import { shakeAnimation, successMessageSlide } from "../utils/animations";

export default function AboutMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const scrollOnceOptions = useMemo(
    () => ({ scrollTrigger: { toggleActions: "play none none none" } }),
    [],
  );

  // Animation refs
  const aboutRef = useScrollAnimation("fadeInLeft", scrollOnceOptions);
  const skillsRef = useScrollAnimation("fadeIn", scrollOnceOptions);
  const recordRef = useScrollAnimation("fadeInRight", scrollOnceOptions);
  const testimonialsRef = useScrollAnimation("fadeIn", scrollOnceOptions);
  const contactRef = useScrollAnimation("fadeIn", scrollOnceOptions);
  const skillsContainerRef = useStaggeredAnimation(".skill-card", scrollOnceOptions);
  const teachingContainerRef = useStaggeredAnimation(".teaching-card", scrollOnceOptions);
  const certificatesContainerRef = useStaggeredAnimation(
    ".certificate-card",
    scrollOnceOptions,
  );
  const testimonialsContainerRef = useStaggeredAnimation(
    ".testimonial-card",
    scrollOnceOptions,
  );
  const englishSkillRef = useSkillBarAnimation("100%");
  const literatureSkillRef = useSkillBarAnimation("100%");

  const teach = [
    {
      about: "Exam Preparation",
      skill:
        "Strategic preparation for standardized tests, finals, and competitive exams with proven techniques.",
      image: "/icon1.png",
    },
    {
      about: "Critical Thinking",
      skill:
        "Fostering analytical skills and problem-solving abilities beyond textbook learning.",
      image: "/icon2.png",
    },
    {
      about: "Study Planning",
      skill:
        "Customized study schedules and time management strategies tailored to individual needs.",
      image: "/icon3.png",
    },
    {
      about: "Confidence Building ",
      skill:
        "Developing mental resilience and positive mindset for academic challenges.",
      image: "/icon4.png",
    },
  ];

  const test = [
    {
      about:
        "The study strategies i learned helped me not just in high school ,  but continue to serve me in university , Miss Temitato dosen't just teach - she empowers",
      name: "Marcus Johnson",
      role: "Former Student ",
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
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      // Shake form and focus first error field
      if (formRef.current) {
        shakeAnimation(formRef.current);
      }

      // Find first error field and focus it
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        const errorElement = formRef.current.querySelector(
          `[name="${firstErrorField}"]`,
        );
        if (errorElement) {
          errorElement.focus();
        }
      }
      return;
    }
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      // Using Web3Forms - FREE email service
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or email me directly.",
      });
      // Shake form on error
      if (formRef.current) {
        shakeAnimation(formRef.current);
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.ctrlKey) {
      handleSubmit();
    }
  };

  return (
    <div className="bg-whiteBg py-16 -mt-px">
      <div className="container mx-auto max-w-7xl">
        <div
          className="px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8"
          id="about"
          ref={aboutRef}
        >
          <div className="space-y-4">
            <h1 className="text-yellowBg">About Me</h1>
            <h1 className="mt-2 text-deepDark font-bold text-3xl sm:text-4xl lg:text-[2.5rem]">
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
          <div className="flex flex-col pt-12 lg:pt-10 justify-center items-center w-full h-full min-w-0">
            <div className="w-[85%] lg:w-full mx-auto lg:mx-0 lg:mr-auto">
              <img
                src="/testimonial.svg"
                alt="testimonial"
                className="max-w-full h-auto"
              />
              <img
                src="/meticsLg.png"
                alt="metrics"
                className="px-8 hidden lg:block w-full mx-auto max-w-full h-auto"
              />
              <img
                src="/metricSm.png"
                alt="metrics"
                className="px-8 lg:hidden w-full mx-auto max-w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="px-4 lg:px-8 mt-20" id="skills" ref={skillsRef}>
          <div className="text-center space-y-6">
            <h1 className="text-yellowBg font-medium text-lg">Expertise</h1>
            <h1 className="text-deepDark font-bold text-2xl">
              Skills & Specializations
            </h1>
            <p className="text-sm text-paleWhite lg:w-[40%] mx-auto">
              A comprehensive approach to academic excellence, combining subject
              mastery with proven coaching methodologies.
            </p>
            <p className="text-ashWhite text-xl mt-10 font-medium">
              Academic Subjects
            </p>
          </div>
          <div>
            <div ref={skillsContainerRef} className="mt-8">
              <div className="border border-none bg-white rounded-xl py-6 px-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 shadow transition-shadow skill-card transform-gpu will-change-transform">
                <div className="space-y-2 mb-6 lg:mb-0">
                  <div className="flex justify-between items-center ">
                    <div className="flex gap-3 items-center">
                      <img
                        src="/iconFirst.png"
                        alt="icon"
                        className="rounded-full w-12 h-12 transition-transform duration-300 hover:scale-110"
                      />
                      <h1 className="font-bold">English </h1>
                    </div>
                    <p className="font-medium">100%</p>
                  </div>
                  <div
                    className="h-6 bg-yellowBg rounded-full transition-all duration-1000 ease-out skill-bar"
                    ref={englishSkillRef}
                  ></div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <img
                        src="/icon2.png"
                        alt="icon"
                        className="rounded-full w-12 h-12 transition-transform duration-300 hover:scale-110"
                      />
                      <h1 className="font-bold">Literature</h1>
                    </div>
                    <p className="font-medium">100%</p>
                  </div>
                  <div
                    className="h-6 bg-yellowBg rounded-full transition-all duration-1000 ease-out skill-bar"
                    ref={literatureSkillRef}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h1 className="mt-10 text-ashWhite text-xl font-medium">
              Coaching Specialties
            </h1>
            <div
              className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4  mt-8"
              ref={teachingContainerRef}
            >
              {teach.map((item, index) => (
                <div
                  className="border border-none rounded-xl bg-white mx-auto min-h-40 flex items-start p-5 gap-3 shadow transition-all duration-300 hover:shadow-xl hover:-translate-y-1 teaching-card card-hover transform-gpu will-change-transform w-full"
                  key={index}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={item.image}
                    alt={item.about}
                    className="transition-transform duration-300 hover:scale-110 max-w-full h-auto"
                  />
                  <div className="text-start gap-5 min-w-0">
                    <p className="text-ashWhite text-[1.25rem] lg:text-xl font-normal transition-colors duration-300 hover:text-yellowBg">
                      {item.about}
                    </p>
                    <p className="text-paleWhite text-[1rem] lg:text-[1.125rem] ">
                      {item.skill}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <h1 className="text-xl font-medium text-ashWhite">
              Teaching Methods & Tools
            </h1>
            <div className="flex flex-col lg:flex-row justify-between items-center rounded-xl gap-6 mt-5">
              <div className="border border-none bg-white w-full max-w-[320px] h-14 p-3 rounded-full shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-yellowBg/10 transform-gpu will-change-transform">
                <h1 className="font-light text-[1.125rem] text-[ashWhite] transition-colors duration-300 hover:text-yellowBg">
                  One-On-one Sessions
                </h1>
              </div>
              <div className="border border-none bg-white w-full max-w-[320px] h-14 p-3 rounded-full shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-yellowBg/10 transform-gpu will-change-transform">
                <h1 className="font-light text-[1.125rem] text-[ashWhite] transition-colors duration-300 hover:text-yellowBg">
                  Progress Tracking
                </h1>
              </div>
              <div className="border border-none bg-white w-full max-w-[320px] h-14 p-3 rounded-full shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-yellowBg/10 transform-gpu will-change-transform">
                <h1 className="font-light text-[1.125rem] text-[ashWhite] transition-colors duration-300 hover:text-yellowBg">
                  Interactive Learning
                </h1>
              </div>
              <div className="border border-none bg-white w-full max-w-[320px] h-14 p-3 rounded-full shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-yellowBg/10 transform-gpu will-change-transform">
                <h1 className="font-light text-[1.125rem] text-[ashWhite] transition-colors duration-300 hover:text-yellowBg">
                  Practice Tests
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 px-4 lg:px-8" id="record" ref={recordRef}>
          <div className="text-center space-y-3">
            <p className="text-deepYellow font-medium text-lg">Track Record</p>
            <h1 className="text-deepDark text-2xl font-bold">
              Works & Achievements{" "}
            </h1>
            <p className="font-normal text-sm text-paleWhite max-w-[520px] mx-auto">
              Teaching certifications and professional experience gained through
              consistent instructional practice
            </p>

            <p className="mt-10 text-ashWhite font-medium text-xl ">
              Certificates
            </p>

            <div
              className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 mt-8"
              ref={certificatesContainerRef}
            >
              <div className="rounded-xl bg-white mx-auto flex items-start justify-between p-8 gap-4 shadow transition-all duration-300 hover:shadow-xl hover:-translate-y-1 certificate-card card-hover transform-gpu will-change-transform w-full h-50 lg:h-40">
                <div className="text-start">
                  <h1 className="text-ashWhite text-xl lg:text-xl font-semibold transition-colors duration-300 hover:text-yellowBg">
                    Teachers Registration Council of Nigeria
                  </h1>
                  <p className="text-paleWhite font-medium text-[1rem] lg:text-[1.125rem]">
                    Certified Teacher
                  </p>
                </div>
                <p className="text-yellowBg font-bold">2025</p>
              </div>
              <div className="rounded-xl bg-white mx-auto flex items-start justify-between p-8 gap-3 shadow transition-all duration-300 hover:shadow-xl hover:-translate-y-1 certificate-card card-hover transform-gpu will-change-transform w-full h-50  lg:h-40">
                <div className="text-start">
                  <h1 className="text-ashWhite text-xl lg:text-xl font-semibold transition-colors duration-300 hover:text-yellowBg">
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

        <div
          className="mt-20 px-4 lg:px-8"
          id="testimonials"
          ref={testimonialsRef}
        >
          <div className="text-center space-y-2">
            <p className="text-deepYellow font-medium text-lg">Testimonials</p>
            <h1 className="text-deepDark text-2xl font-bold">
              What Learners and Parents Say{" "}
            </h1>
            <p className="font-normal text-sm text-paleWhite ">
              Real feedback from families who have experienced transformative
              <br /> academic growth
            </p>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10"
              ref={testimonialsContainerRef}
            >
              {test.map((item, index) => (
                <div
                  key={index}
                  className="min-h-60 border border-none bg-white rounded-xl px-4 py-6 text-start space-y-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 testimonial-card card-hover transform-gpu will-change-transform w-full"
                >
                  <div className="rating rating-sm gap-2">
                    <input
                      type="radio"
                      className="mask mask-star-2 bg-yellow-400"
                      defaultChecked
                      readOnly
                    />
                    <input
                      type="radio"
                      className="mask mask-star-2 bg-yellow-400"
                      defaultChecked
                      readOnly
                    />
                    <input
                      type="radio"
                      className="mask mask-star-2 bg-yellow-400"
                      defaultChecked
                      readOnly
                    />
                    <input
                      type="radio"
                      className="mask mask-star-2 bg-yellow-400"
                      defaultChecked
                      readOnly
                    />
                    <input
                      type="radio"
                      className="mask mask-star-2 bg-yellow-400"
                      defaultChecked
                      readOnly
                    />
                  </div>
                  <p className="text-whiteText text-sm italic">
                    "{item.about}"
                  </p>
                  <hr className="mt-8 text-whiteBorder" />
                  <div className="flex flex-col gap-1">
                    <h1 className="font-medium transition-colors duration-300 hover:text-yellowBg">
                      {item.name}
                    </h1>
                    <p className="text-paleWhite text-sm">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 px-2 lg:px-8" id="contact" ref={contactRef}>
          <div className="flex flex-col justify-center items-center p-3 gap-4 mt-15 ">
            <p className="text-deepYellow font-medium text-lg">Get In Touch</p>
            <h1 className="text-deepDark text-2xl font-bold">
              Let's start your journey{" "}
            </h1>
            <p className="px-8 font-medium text-sm text-paleWhite text-center">
              Ready to unlock your academic potential? Reach out for a free{" "}
              <br />
              consultation and let's discuss how I can help you succeed.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-4 mt-10 w-full min-w-0">
              <div className="border border-none bg-white rounded-xl p-6 w-full min-w-0">
                <h1 className="text-black font-medium text-2xl">
                  Send a Message
                </h1>
                <form className="pt-8 space-y-8" ref={formRef}>
                  <div className="flex flex-col justify-between gap-3 mt-4 w-full min-w-0">
                    <div className="w-full min-w-0">
                      <h1 className="font-bold text-sm"> Your Name</h1>
                      <label
                        className={`input input-neutral border border-slate-100 bg-white text-black shadow mt-2 transition-all duration-300 focus-within:shadow-lg focus-within:border-yellowBg w-full ${
                          errors.name ? "border-red-400" : ""
                        }`}
                      >
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
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="w-full min-w-0">
                      <h1 className="font-bold text-sm">Email Address </h1>
                      <label
                        className={`input input-neutral border border-slate-100 bg-white text-black shadow mt-2 transition-all duration-300 focus-within:shadow-lg focus-within:border-yellowBg w-full ${
                          errors.email ? "border-red-400" : ""
                        }`}
                      >
                        <input
                          className="grow min-w-0"
                          name="email"
                          type="text"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={handleChange}
                          onKeyPress={handleKeyPress}
                        />
                      </label>
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className=" w-full ">
                    <h1 className="font-bold text-sm">Subject</h1>
                    <label
                      className={`input input-neutral border border-slate-100 bg-white text-black shadow mt-2 transition-all duration-300 focus-within:shadow-lg focus-within:border-yellowBg w-full ${
                        errors.subject ? "border-red-400" : ""
                      }`}
                    >
                      <input
                        className=" grow"
                        name="subject"
                        type="text"
                        placeholder="How can i help you ?"
                        value={formData.subject}
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                      />
                    </label>
                    {errors.subject && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <h1 className="font-bold text-sm">Message</h1>
                    <textarea
                      name="message"
                      placeholder="Tell me about your academic goals and how can i help..."
                      className={`w-full rounded-lg border-slate-100 h-30 p-2 bg-white text-black shadow mt-2 border transition-all duration-300 focus:shadow-lg focus:border-yellowBg ${
                        errors.message ? "border-red-400" : ""
                      }`}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      onKeyPress={handleKeyPress}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  {status.message && (
                    <div
                      ref={(el) => {
                        if (el && status.message) {
                          successMessageSlide(el);
                        }
                      }}
                      className={`flex items-center gap-2 p-4 rounded-lg transition-all duration-300 ${
                        status.type === "success"
                          ? "bg-green-500/20 border border-green-500/50 text-black"
                          : "bg-red-500/20 border border-red-500/50 text-red-200"
                      }`}
                    >
                      {status.type === "success" ? (
                        <CheckCircle className="h-5 w-5 shrink-0" />
                      ) : (
                        <AlertCircle className="h-5 w-5 shrink-0" />
                      )}
                      <p className="text-sm">{status.message}</p>
                    </div>
                  )}

                  <button
                    className="btn btn-animate bg-yellowBg text-white font-bold rounded-lg w-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleSubmit}
                    disabled={
                      loading ||
                      !formData.name ||
                      !formData.email ||
                      !formData.subject ||
                      !formData.message
                    }
                  >
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

              <div className="border border-none bg-white rounded-xl p-4 md:p-8 flex flex-col items-start gap-4 transition-all duration-300 hover:shadow-xl w-full sm:w-[300px] md:w-full">
                <h1 className="font-medium text-2xl transition-colors duration-300 hover:text-yellowBg">
                  Contact Information
                </h1>
                <div className="flex items-center gap-3 p-2 transition-all duration-300 hover:bg-yellowBg/5 rounded-lg w-full min-w-0">
                  <img
                    src="/Frame 2085661059 (11).png"
                    className="transition-transform duration-300 hover:scale-110 max-w-full h-auto"
                  />
                  <div className="min-w-0">
                    <p className="text-paleWhite font-bold">Phone</p>
                    <p className="font-bold text-ashWhite text-sm">
                      +2349040452452
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 transition-all duration-300 hover:bg-yellowBg/5 rounded-lg w-full min-w-0">
                  <img
                    src="/Frame 2085661059 (12).png"
                    className="transition-transform duration-300 hover:scale-110 max-w-full h-auto"
                  />
                  <div className="min-w-0">
                    <p className="text-paleWhite font-bold">Email</p>
                    <p className="font-bold text-ashWhite text-sm truncate">
                      d21stcenturytutor@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 transition-all duration-300 hover:bg-yellowBg/5 rounded-lg w-full min-w-0">
                  <img
                    src="/Frame 2085661059 (13).png"
                    className="transition-transform duration-300 hover:scale-110 max-w-full h-auto"
                  />
                  <div className="min-w-0">
                    <p className="text-paleWhite font-bold">Location</p>
                    <p className="font-bold text-ashWhite text-sm">
                      Lagos Nigeria{" "}
                    </p>
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

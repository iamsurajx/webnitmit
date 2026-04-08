export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white px-6 md:px-16 py-24">
      
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-extrabold">
            <span className="text-red-500">LET’S</span>{" "}
            <span className="text-white">TALK</span>
          </h2>

          <p className="text-gray-500 text-sm mt-4">
            Fill out the form and we’ll get back to you shortly.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-10">

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div>
              <label className="text-sm text-gray-400">First Name</label>
              <input type="text" className="input-style mt-2" />
            </div>

            <div>
              <label className="text-sm text-gray-400">Last Name</label>
              <input type="text" className="input-style mt-2" />
            </div>

          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input type="email" className="input-style mt-2" />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div>
              <label className="text-sm text-gray-400">Company</label>
              <input type="text" className="input-style mt-2" />
            </div>

            <div>
              <label className="text-sm text-gray-400">Budget (Optional)</label>
              <input type="text" className="input-style mt-2" />
            </div>

          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div>
              <label className="text-sm text-gray-400">Location (Optional)</label>
              <input type="text" className="input-style mt-2" />
            </div>

            <div>
              <label className="text-sm text-gray-400">How did you hear about us?</label>
              <input type="text" className="input-style mt-2" />
            </div>

          </div>

          {/* Message */}
          <div>
            <label className="text-sm text-gray-400">How can we help?</label>
            <textarea
              rows="4"
              className="input-style mt-2 resize-none"
            ></textarea>
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <input type="checkbox" className="accent-red-500" />
            <span>Subscribe to newsletter</span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 transition py-3 font-medium tracking-wide"
          >
            SUBMIT
          </button>

          {/* Footer */}
          <p className="text-xs text-gray-500 text-center">
            By submitting, you agree to our privacy policy.
          </p>

        </form>
      </div>
    </section>
  );
}
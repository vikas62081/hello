import React, { Component, useState } from 'react';

const Contact =({data})=>{  
         var name = data.name;
         var street = data.address.street;
         var city = data.address.city;
         var state = data.address.state;
         var zip = data.address.zip;
         var phone = data.phone;
         var email = data.email;
         var message =data.contactmessage;
      const initialFormData={contactName:'',contactEmail:'',contactPhone:'',contactSubject:'',contactMessage:''}
      const [formData,setFormData]=useState(initialFormData)
const handleChange=e=>{
   setFormData({...formData,[e.target.name]:e.target.value})
}
const onFormSubmit=e=>{
      // https://sheet.best/api/sheets/cf969697-682a-40e3-bad4-d54803eeeacf
   e.preventDefault()
   fetch("https://sheet.best/api/sheets/eb7fa4be-f5a2-4833-89de-506b05d0aafd", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then((r) => r.json())
      .then((data) => {
        // The response comes here
        setFormData(initialFormData)
        alert("Vikas will contact you soon");
      })
      .catch((error) => {
        // Errors are reported there
        ("Something went wrong !",error);
      });
 
}
      return (
         <section id="contact">

            <div className="row section-head">

               <div className="two columns header-col">

                  <h1><span>Get In Touch.</span></h1>

               </div>

               <div className="ten columns">

                  <p className="lead">{message}</p>

               </div>

            </div>

            <div className="row">
               <div className="eight columns">

                  <form onSubmit={onFormSubmit}>
                     <fieldset>

                        <div>
                           <label htmlFor="contactName">Name <span className="required">*</span></label>
                           <input type="text" value={formData.contactName} size="35"
                           placeholder="Enter name" id="contactName" name="contactName" onChange={handleChange} required/>
                        </div>

                        <div>
                           <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                           <input type="email"  value={formData.contactEmail} size="35"
                           placeholder="Enter email" id="contactEmail" name="contactEmail" onChange={handleChange} required />
                        </div>
                        <div>
                           <label htmlFor="contactPhone">Phone Number <span className="required">*</span></label>
                           <input type="text"  value={formData.contactPhone} size="35"
                           placeholder="Enter phone number" id="contactPhone" name="contactPhone" onChange={handleChange} required />
                        </div>

                        <div>
                           <label htmlFor="contactSubject">Subject</label>
                           <input type="text"  value={formData.contactSubject} size="35"
                           placeholder="Enter subject" id="contactSubject" name="contactSubject" onChange={handleChange} required />
                        </div>

                        <div>
                           <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                           <textarea cols="50"  value={formData.contactMessage} rows="2"
                           placeholder="Your message goes here" id="contactMessage" name="contactMessage" onChange={handleChange} required></textarea>
                        </div>

                        <div>
                           <button className="submit">Submit</button>
                           <span id="image-loader">
                              <img alt="" src="images/loader.gif" />
                           </span>
                        </div>
                     </fieldset>
                  </form>

                  <div id="message-warning"> Error boy</div>
                  <div id="message-success">
                     <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                  </div>
               </div>


               <aside className="four columns footer-widgets">
                  <div className="widget widget_contact">

                     <h4>Address and Phone</h4>
                     <p className="address">
                        {name}<br />
                        {street} <br />
                        {city}, {state} {zip}<br />
                        <span>{phone}</span>
                     </p>
                  </div>

                  {/* <div className="widget widget_tweets">
                     <h4 className="widget-title">Latest Tweets</h4>
                     <ul id="twitter">
                        <li>
                           <span>
                              This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                           </span>
                           <b><a href="#">2 Days Ago</a></b>
                        </li>
                        <li>
                           <span>
                              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                              eaque ipsa quae ab illo inventore veritatis et quasi
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                           </span>
                           <b><a href="#">3 Days Ago</a></b>
                        </li>
                     </ul>
                  </div> */}
               </aside>
            </div>
         </section>
      );
   
}

export default Contact;

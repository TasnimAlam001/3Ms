import { useEffect } from "react";


const CommentBox = () => {

    useEffect(() => {
        scrollToBottom();
      }, []); // Scroll to the bottom on component mount
    
      function scrollToBottom() {
        const commentsContainer = document.getElementById('commentsContainer');
        commentsContainer.scrollTo(0, commentsContainer.scrollHeight);
      }



    return (
        <div>
            <h1 className="w-5/6 mx-auto p-3 mt-5 text-center font-bold text-2xl bg-white rounded-lg ">Comment Box</h1>
            <div id="commentsContainer" className="w-5/6 h-[360px] mx-auto p-3 mt-5 bg-white rounded-lg overflow-y-auto">
                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v937-aew-139-klhdd3an.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=ace5f93316825feedd89a502ed8e69aa" />
                        </div>
                    </div>
                    <div className="chat-header">Tasnim Alam</div>
                    <div className="chat-bubble text-sm">You were the Chosen One!</div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v937-aew-139-klhdd3an.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=ace5f93316825feedd89a502ed8e69aa" />
                        </div>
                    </div>
                    <div className="chat-header">Mithun Roy</div>
                    <div className="chat-bubble text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, cumque.</div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v937-aew-139-klhdd3an.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=ace5f93316825feedd89a502ed8e69aa" />
                        </div>
                    </div>
                    <div className="chat-header">Chan Chol</div>
                    <div className="chat-bubble text-sm">Quaerat deleniti ea saepe omnis earum, accusamus quae atque soluta perferendis reiciendis ut, fugiat reprehenderit repellat eligendi quam, nisi voluptatum sequi sit!</div>
                </div>
                

            </div>

        </div>
    );
};

export default CommentBox;
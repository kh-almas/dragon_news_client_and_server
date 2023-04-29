import React from 'react';
import {Button} from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Latest = () => {
    return (
        <div className="d-flex bg-success text-white px-3 py-2 rounded-3 mt-3">
            <Button variant="info">Latest</Button>
            <Marquee>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae debitis nam, placeat quia repellendus tempore unde! Aliquam at beatae distinctio earum, esse exercitationem iste laudantium libero modi molestiae natus necessitatibus nemo nostrum odit pariatur provident sapiente, sunt velit veniam vero. Amet architecto assumenda aut, culpa cum delectus dolor ea, eligendi enim eveniet ex facilis iusto labore modi molestiae molestias natus nemo nesciunt nihil non placeat porro possimus quae quasi quibusdam quis quo quod rem saepe sequi totam ut veritatis vero! Consequatur corporis dicta, exercitationem facere labore laudantium molestias nam nemo nostrum officiis omnis optio temporibus. Accusantium blanditiis id ipsam iste nam odit officia omnis, quam saepe ullam. A accusamus accusantium, at autem commodi consectetur dicta dolores est eum fuga incidunt itaque iure laboriosam laborum maxime nam nesciunt obcaecati pariatur perferendis perspiciatis porro quasi qui quisquam ratione recusandae reprehenderit, repudiandae sapiente suscipit vel voluptatibus. Aliquam, aspernatur atque corporis deleniti doloremque doloribus excepturi hic laboriosam, minus officiis optio reiciendis rem, repudiandae sequi tempore unde voluptatem voluptatibus! Ab amet aperiam beatae, dolor dolore dolores eveniet ex harum iste laudantium magnam, nemo officiis omnis quos repellendus repudiandae sapiente, sint soluta temporibus unde. Aliquam animi earum ex inventore iusto quae quia ullam voluptas voluptatum.
            </Marquee>
        </div>
    );
};

export default Latest;
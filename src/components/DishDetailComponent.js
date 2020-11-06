import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import moment from 'moment';

function DishDetail({ selectedDish }) {

    function renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else {
            return (
                <div></div>
            );
        }
    }

    const renderComments = (dish) => {
        if (dish != null) {
            let comments = dish.comments.map(comment => {
                let commentDate = new Date(comment.date);
                return (
                    <li>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {moment(comment.date).format('ll')}</p>
                    </li>
                )
            });

            return (
                <div className="col-6 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments}
                    </ul>
                </div>
            );
        }
        else {
            return (
                < div ></div >
            );
        }
    }


    return (
        <div className="container">
            <div class="row">
                <div className="col-12 col-md-5 m-1">
                    {renderDish(selectedDish)}
                </div>
                {renderComments(selectedDish)}
            </div>
        </div>
    )
}

export default DishDetail;
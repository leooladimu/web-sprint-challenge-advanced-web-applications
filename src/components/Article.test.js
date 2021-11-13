import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

test('renders component without errors', () => {
    render(<Article article={testArticle}/>);
    // const { rerender } = render(
    //     <Article article={[]}/>)
    // const art = screen.queryAllByTestId('article')

    // expect(art).toHaveLength(0)

    // rerender(<Article articles={ Article } 
    // />
    // )
    // art = screen.queryAllByTestId('article')
    // expect(art).toHaveLength(0)
});

 test('renders headline, author from the article when passed in through props', () => {
    render(<Article headline = { article.headline }/>
    )
    // render(<Article author = { article.author }/>
    // )
    // const Article = screen.queryByText(/text expect/i);
    // expect(Article).toBeInTheDocument();
 });

 test('renders "Associated Press" when no author is given', () => {

    // render(<Article article={ testArticleNoAuthor }/>);

    render(<Article/>)
    const AssociatedPress = screen.queryByText(/no author is given/i)
    expect (AssociatedPress ).toBeInTheDocument()
 });

test('executes handleDelete when the delete button is pressed', () => {
    const handleDelete = jest.fn();
    render(<Article article={ testArticle } handleDelete={ handleDelete }/>);
    const button = screen.getByTestId('deleteButton');
    userEvent.click(button);
    expect(handleDelete).toBeCalled();
});
 
//Task List:
//1. Complete all above tests. Create test article data when needed.
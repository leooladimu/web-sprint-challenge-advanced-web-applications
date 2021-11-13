import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';
import articleService from '../services/articleServices';
jest.mock('../services/articleServices');

test("renders zero articles without errors",    async () => {
    articleService.mockResolvedValueOnce({
        data: [],
    })
});

test("renders three articles without errors", async () => {
    articleService.mockResolvedValueOnce({
        data: [
          {
            id: 1,
            headline: "Article 1",
            createdOn: "today",
            author:"me",
            image: 134,
            summary: "Great article."   
          },
    
          {
              id: 2,
              headline: "Article 2",
              createdOn: "today",
              author:"myself",
              image: 134,
              summary: "Worst article ever."   
          },
    
          {
              id: 3,
              headline: "Article 3",
              createdOn: "today",
              author:"and I",
              image: 134,
              summary: "Be proud of yourself."   
          }
        ]
    });
    
    render(<View/>);
    
    await waitFor(() => {
        const articles = screen.queryAllByTestId(/article/i);
        console.log("articles----", articles);
        expect(articles).toHaveLength(3);
    })
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.
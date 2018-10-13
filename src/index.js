import React from 'react';
import {render} from 'react-dom';
import ArticleList from './components/ArticleList';
import {articles} from './components/fixtures';

render(<ArticleList articles={articles} /> , document.getElementById('root'));

import React from 'react';

import { IoClose, IoSearch } from 'react-icons/io5';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';

import { useClickOutside } from 'react-click-outside-hook';
import { useEffect } from 'react';
import { useRef } from 'react';
import MoonLoader from 'react-spinners/MoonLoader';
import { useDebounce } from '../../hooks/debounceHook';
import axios from 'axios';
import { CharacterShow } from '../CharacterShow';

import './styles.scss';

const containerVariants = {
  expanded: {
    height: '7.5em',
  },
  collapsed: {
    height: '3.8em',
  },
};

const containerTransition = { type: 'spring', damping: 22, stiffness: 150 };

export function SearchBar() {
  const [isExpanded, setExpanded] = useState(false);
  const [parentRef, isClickedOutside] = useClickOutside();
  const inputRef = useRef();
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [characterShows, setCharacterShows] = useState([]);
  const [noCharacterShows, setNoCharacterShows] = useState(false);

  const isEmpty = !characterShows || characterShows.length === 0;

  const changeHandler = e => {
    e.preventDefault();
    if (e.target.value.trim() === '') setNoCharacterShows(false);

    setSearchQuery(e.target.value);
  };

  const expandContainer = () => {
    setExpanded(true);
  };

  const collapseContainer = () => {
    setExpanded(false);
    setSearchQuery('');
    setLoading(false);
    setNoCharacterShows(false);
    setCharacterShows([]);
    if (inputRef.current) inputRef.current.value = '';
  };

  useEffect(() => {
    if (isClickedOutside) collapseContainer();
  }, [isClickedOutside]);

  const prepareSearchQuery = query => {
    const url = `http://localhost:3001/player/searchCharacter?name=${query}`;

    return encodeURI(url);
  };

  const searchCharacterShow = async () => {
    if (!searchQuery || searchQuery.trim() === '') return;

    setLoading(true);
    setNoCharacterShows(false);

    const URL = prepareSearchQuery(searchQuery);

    const response = await axios.get(URL).catch(err => {
      console.log('Error: ', err);
    });

    if (response) {
      console.log('Response: ', response.data);
      if (response.data && response.data.length === 0)
        setNoCharacterShows(true);

      setCharacterShows(response.data.data);
    }

    setLoading(false);
  };

  useDebounce(searchQuery, 500, searchCharacterShow);

  return (
    <motion.div
      className="SearchBarContainer"
      animate={isExpanded ? 'expanded' : 'collapsed'}
      variants={containerVariants}
      transition={containerTransition}
      ref={parentRef}
    >
      <div className="SearchInputContainer">
        <span className="SearchIcon">
          <IoSearch />
        </span>
        <input
          className="SearchInput"
          placeholder="Search for a character"
          onFocus={expandContainer}
          ref={inputRef}
          value={searchQuery}
          onChange={changeHandler}
        />
        <AnimatePresence>
          {isExpanded && (
            <motion.span
              className="CloseIcon"
              key="close-icon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={collapseContainer}
              transition={{ duration: 0.2 }}
            >
              <IoClose />
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      {isExpanded && <span className="LineSeperator" />}
      {isExpanded && (
        <div className="SearchContent">
          {isLoading && (
            <div className="LoadingWrapper">
              <MoonLoader loading color="#000" size={20} />
            </div>
          )}
          {!isLoading && isEmpty && !noCharacterShows && (
            <div className="LoadingWrapper">
              <span className="WarningMessage">Start typing to Search</span>
            </div>
          )}
          {!isLoading && noCharacterShows && (
            <div className="LoadingWrapper">
              <span className="WarningMessage">
                No Tv Shows or Series found!
              </span>
            </div>
          )}
          {!isLoading && !isEmpty && (
            <>
              {characterShows.map(show => (
                <CharacterShow
                  key={show.id}
                  name={show.name}
                  level={show.level}
                  vocation={show.vocation}
                />
              ))}
            </>
          )}
        </div>
      )}
    </motion.div>
  );
}

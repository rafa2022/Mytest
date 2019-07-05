--
-- PostgreSQL database dump
--

-- Dumped from database version 10.9 (Ubuntu 10.9-1.pgdg18.04+1)
-- Dumped by pg_dump version 11.4 (Ubuntu 11.4-1.pgdg18.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: contacto; Type: TABLE; Schema: public; Owner: polo
--

CREATE TABLE public.contacto (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    age integer NOT NULL,
    cell character varying(11) NOT NULL
);


ALTER TABLE public.contacto OWNER TO polo;

--
-- Name: contacto_id_seq; Type: SEQUENCE; Schema: public; Owner: polo
--

CREATE SEQUENCE public.contacto_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.contacto_id_seq OWNER TO polo;

--
-- Name: contacto_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: polo
--

ALTER SEQUENCE public.contacto_id_seq OWNED BY public.contacto.id;


--
-- Name: contacto id; Type: DEFAULT; Schema: public; Owner: polo
--

ALTER TABLE ONLY public.contacto ALTER COLUMN id SET DEFAULT nextval('public.contacto_id_seq'::regclass);


--
-- Data for Name: contacto; Type: TABLE DATA; Schema: public; Owner: polo
--

COPY public.contacto (id, name, age, cell) FROM stdin;
1	Marco	12	3102124569
2	Polo	52	3122104523
3	Lina	25	3120547898
4	Juliana	19	3205451245
\.


--
-- Name: contacto_id_seq; Type: SEQUENCE SET; Schema: public; Owner: polo
--

SELECT pg_catalog.setval('public.contacto_id_seq', 4, true);


--
-- Name: contacto contacto_pkey; Type: CONSTRAINT; Schema: public; Owner: polo
--

ALTER TABLE ONLY public.contacto
    ADD CONSTRAINT contacto_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--


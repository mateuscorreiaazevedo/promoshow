import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { Header, Label, Nav, SearchContainer, SearchInput } from "./Styles";

export default function PromotionHeader({ search, handleSearch }) {

    return (
        <Header>
            <Nav>
                <h1 className="title">PROMOSHOW</h1>
                <Link to="/create" className="new-promotion-link" >nova promoção</Link>
            </Nav>
            <Label>
                <SearchInput type="search" placeholder="Buscar" value={search} onChange={handleSearch} />
                <BsSearch className="search-icon" />
            </Label>
        </Header>
    )
}
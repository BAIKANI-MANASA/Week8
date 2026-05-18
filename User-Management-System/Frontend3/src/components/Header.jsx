import { NavLink } from "react-router";

function Header() {
  return (
    <nav className="flex justify-between items-center px-12 py-4 bg-white border-b border-gray-200 shadow-sm">
      <img
        className="rounded-full"
        width="60px"
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAmgMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQcBAwYEAgj/xABAEAABAwMABQYMAwcFAAAAAAABAAIDBAURBhIhMUEHE1FhcYEUFyIyQlWRk6GxwdEVI1IIM0NistLhU3KiwvD/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQMEAgUG/8QAIhEBAAICAgIBBQAAAAAAAAAAAAECAxESMQQhEwUyQVHB/9oADAMBAAIRAxEAPwC8UREBERAREQEREBF8l7WgknAHEqKq9KNHqKQx1l9tkEg3skq42kdxKCXReC33u03PP4dc6Orxv8HnbJj2Fe4HKDKIiAiIgIiICIiAiIgIiICIiDB2BV3yh8qlt0XZLQ28x114GzmgTqQnpeRx/lG3sXSafXoaP6IXS4ibmpo4HNgdjP5rtjPiQvyDI50ji97i57iS5zjkk9JQTekWmOkGkcz33W6Tyxu/gNdqRAdAYNigERB9xSPikbJE9zHtOWuacEHtVkaDcrt6sM0VPeJZLnbtgcJTmWMdLXccdB+CrRZAyg/atmutHerbBcbbO2elnbrMe35EcD0jgvaqA/Z0r7qLtX26Ma9r5rnZdZ37qTc0gde0Hs6lf6AiIgIiICIiAiIgIiICIiCtP2gHFugJAOw1cWfionQrQCzs0Op4bvQxVNRWsE8z3t8phcPJDXb24B4ccro+WugdcdCvB2ec6tp2g9Gs8N/7KbjY2NjY2jYwBo7tipzWmIjTR49ItM7VPeuRankc59jujos7RFVt1h2azduO4rmZuR7SiM4aaCXrZOR82hX+iqjNaF8+PSVC0vI3pHK8CoqbdA3O0mVziO4N+q620cjNop4nfilbU1UxYQObxGxp6cbScdvcrNTsSc15IwUhU3IPTzWrTi+2moxzkcBY/HEseBn4q+1WWjVqFJywXasY0hlTbWSdWsXBp/o+Ks1aqzuNsVo1OhERS5EREBERAREQEREBEWCggtJgyd1FSy+Y6Zsp6yxwc34r4XuvNA+rbFLCPzYXZAPEcR8F4eJWXNvl7bfHmOPphERUtIsrCyiGinYyLSGmqR58sToHf7c6w+K6dQlDQPlrmVb8CONvkdJO1Ti14t8fbBn1z9CIitUiIiAiIgIiICIiAiIgHcoWti5uocceS7aFNKNvcjIaZsjhueBnoyq8teVVuG/GyPRAQ4ZByDxRY3oC+mtLnhrd5OAsLda5WSV7ot7mR63YcrqkcracZLcazKYhYI42tHAL7QItzzexERAREQEREBERAREQEWmpqYKWIy1MzIoxvc92AuZuWndtpmv8FbJVOaDtaNVvtP2UxWZ6RMxDqyVHV+pVsMTxln/tqqS6ab324SNcKrwZgcHCKAao6snefarMs1xjuttp62HAErdoHouG8dxU2pqPZW259I6Qz22QRu/MhPmkr6/E2f6TvapiaFk8ZjkblpXP1FBNDO2JrS8P8w9Kx5MWp9NuLNuPba6tlqHtjp48FxwOJ/wpa2UooBr5zK7z3fRfNBRMpI/1SHznfQdS9RIAy7cNuTwVuPHx7U5cvL1HSSjkD26w3L7VL3DTO5i+1FXbKx7KbOpHEfKY5o3EtPE78rrbHyhRVEDPxWndHJnDpIBlns3/ADWjhZn5w7tF4rfdaG5MLqKpjlwMloOHDtB2he1cOhERAREQEREGDuXNaVaUR2k+DUobLWEbQd0fWevqU3dq1tvttRVvGREwux0ngPaqammlqJnzzvL5JDrOceJKtx05TuVd7ahsra6quE3PVk75pOlx2DsG4dy8k4c6F7WecRhfaLTpShpI5Ij5bC1djybXbmK2S2TOxHUeXF1PG8d4HwXK18hM2puDVoglkp5454XassTg9h6CDkKu0bh1E6XtLIyKJ0krw1jAXOcTuHSuBumk9VNc456JzoqeEnm2H0+kuHX0cF29mrqa6aPtuLw0skiPOsO0NIHlN+arDUYfKDcccZ3Kzw8VbTO46eR9b8rJiilaTrf8WXaLnDdaRs8Jwdz2E7WHoUJyg3fwCz+CxOxPV5Z2M9I/TvXu0EbD+Bz7GsLZnF7+4bVWek91N5vM9UM80083CP5BuPftPeqLY4rkmv6ep4uacvj1vPcwi2Nc86rGknqUlQxyRxESDG3IUfFIY5A5u0jh0qZVsOpfUb3xSNkic5j2nLXNOCF2ujGmT+cZSXhwLScMqTsx0B33XEJv2FRakTHsi0wvMHKyua0Eub6+z81M4ulpnc2STtLfRPs2dy6VZZjU6aIncCIihIiIg5rlBkLNHHsH8SVjT7c/RVgrH5SHYs0DemoH9JVcLTh+1Rk7ERaYX5lnb+l/0/wrXDTcYtZokHo7D2KPU2QC0g7jvCh5ozFK5nRuPSFzKYdHonfnUFDcbZI483VMJi27pNgPtHyTcuaBLSC3eNy6GnmbPA2XOARt6itXizEbh899cxXmaX/HT1TXt1v0frKCEkS1jwMg7mY8r27B3rk1uq5zUTufw3AdS0jaQAM5WfJMWvNoex4WK2Lx6Ut3D00MWvLrnzW8OkqTWuni5mIN47z2rFU7Up5D1KIaW1Fhhyxp6RlZUodlyaSEV1dF6Lomux2E/dWEq15OXYvkrf1U5+YVkhZcv3L6dMoiKt2IiIIPSmyS3ylhginbDzcmuS5uc7MLm/F7U+sYvdH7qwEXUXtHTmaxPav/ABe1HrGL3R+60Q8m9XHNI83OEtec45k/dWOin5LI4VV/4van1jF7o/deeq5NKmcNxc4QRxMJOfirIRPksnhVV/iurPWtP7h39y2x8m1fHBJELtBh+M/kO2f8lZSypjLaPcS4vhpeNWhV/itrPWtP7g/3LZT8mFVFKHvukBxuAgI+qsxFzzs74Qr/AMXtT6xi90futNTycVc0RYLpCMnjCT9VYyKfksjhVXsfJ3UsY1puUJIGP3R+6+vF7UesYvdH7qwET5LHCrlNG9E5rNcvCn1ccrebLNVrCN+OvqXVLKLmZmfcuoiI6ERFCRERAREQEREBERAREQEREBERAREQEREBERB//9k="
        alt=""
      />

      <ul className="flex gap-8 text-lg font-medium text-gray-700">
        <li>
          <NavLink
            to=""
            className={({ isActive }) =>
              isActive
                ? "bg-black text-white px-4 py-2 rounded-lg"
                : "hover:text-black transition"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/add-user"
            className={({ isActive }) =>
              isActive
                ? "bg-black text-white px-4 py-2 rounded-lg"
                : "hover:text-black transition"
            }
          >
            AddUser
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/users-list"
            className={({ isActive }) =>
              isActive
                ? "bg-black text-white px-4 py-2 rounded-lg"
                : "hover:text-black transition"
            }
          >
            UsersList
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
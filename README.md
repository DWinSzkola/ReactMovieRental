# Dokumentacja aplikacji webowej MovieRental

## Opis projektu

Aplikacja do wypożyczania filmów, zbudowana w technologii React przy użyciu JavaScript oraz narzędzia Vite. Umożliwia użytkownikom logowanie, przeglądanie filmów oraz zarządzanie swoją listą filmów do obejrzenia (watchlist). Po zalogowaniu użytkownicy mogą wypożyczać filmy, przeglądać szczegóły na IMDb oraz wybierać różne opcje jakościowe przy wypożyczeniu filmu.

## Funkcjonalności

### Strona Główna

- **Logowanie**: Użytkownicy mogą się zalogować, aby uzyskać dostęp do pełnej funkcjonalności aplikacji.
- **Przeglądanie Filmów**: Po zalogowaniu użytkownicy mają dostęp do listy filmów, które mogą przeglądać i wyszukiwać po tytule.

### Strona z Filmami 🎥

- **Wyszukiwarka**: Umożliwia wyszukiwanie filmów po tytule.
- **Dodawanie do Watchlisty**: Użytkownicy mogą dodać filmy do swojej listy filmów do obejrzenia.
- **Przejście do IMDb**: Każdy film ma link do swojej strony na IMDb, gdzie użytkownicy mogą znaleźć dodatkowe informacje.

### Strona z Listą Filmów do Obejrzenia (Watchlist)

- **Wypożyczanie filmu**: Użytkownicy mogą wypożyczyć filmy z listy, klikając przycisk "Wypożycz".
- **Odliczanie czasu**: Po wypożyczeniu filmu, zaczyna się odliczanie dwóch dni, po którym film przestaje być dostępny do oglądania.
- **Wybór jakości**: Użytkownicy mogą wybrać jakość filmu (np. HD, 4K) oraz dodatkową opcję dubbingu, co wiąże się z dodatkowymi kosztami.
- **Ceny**: Większa rozdzielczość filmu (np. 4K) wiąże się z wyższą ceną wypożyczenia.

## Stan Aplikacji

Projekt jest w trakcie rozwoju. W przyszłości planowane są dodatkowe funkcje, takie jak rejestracja użytkownika, integracja z bazą danych filmów oraz możliwość oceniania filmów przez użytkowników.

## Autor 👨‍💻

Autorem aplikacji jest **Dawid Winogrodzki**.

## Użyte biblioteki 📦

W poniższym pliku `package.json` znajdują się biblioteki, które zostały obecnie użyte w projekcie:

```json
{
  "name": "movierentalproject",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "bootstrap": "^5.3.3",
    "react": "^19.0.0",
    "react-bootstrap": "^2.10.9",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.21.0",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.21.0",
    "eslint-plugin-react-hooks": "^5.1.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^15.15.0",
    "vite": "^6.2.0",
    "vite-plugin-svgr": "^4.3.0"
  }
}
```
## Użyte biblioteki

- ⚛️**React**: Biblioteka do budowy interfejsu użytkownika.
- 🎨**React-Bootstrap**: Zestaw komponentów UI oparty na Bootstrapie.
- ⚡**Vite**: Narzędzie do budowy aplikacji front-endowej z szybkim czasem ładowania.
- 🖌️**Bootstrap**: Framework CSS do budowy responsywnych i estetycznych interfejsów.
- 📈**ESLint**: Narzędzie do analizy statycznej kodu w celu wykrywania błędów i utrzymania jakości kodu.

## Uruchomienie aplikacji ⬇️  

1. Zainstaluj zależności:

    ```bash
    npm install
    ```

2. Uruchom aplikację w trybie deweloperskim:

    ```bash
    npm run dev
    ```

3. Otwórz przeglądarkę i wejdź na adres `http://localhost:3000`.

## Plany na przyszłość

- Integracja z zewnętrznymi API (np. API IMDb).
- Rozbudowa listy filmów o dodatkowe szczegóły, takie jak oceny, gatunki i recenzje.
- Poprawa mechanizmu wypożyczenia filmów, w tym obsługa różnych walut i opcji płatności.

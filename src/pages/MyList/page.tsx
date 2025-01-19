import React from "react";
import CardGrid from "../../components/CardGrid";

const dummyData = [
  {
    id: 1,
    title: "Example Movie 1",
    type: "movie",
    release_date: "2025-01-12",
    backdrop_path:
      "https://occ-0-4960-988.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcS2JPIV3anXe7XByosrzf7pqj8et0NrD3boVE48aSJ7husNRjRF1XNviyxnanlYMh7IVMxmrrSHqQtOMx8QnKIR8r9d3pC4IPc.webp?r=bfe",
    poster_path:
      "https://occ-0-4960-988.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQpaAaVDsiYwgiiE5reeGjkzHYIUTq5gYbI41fhAFsHe8I7nvn_3jlvhDLcEU-be-29ABcz9xE2Ses7o-zishjh3HMZLRqSWakOr.webp?r=a64",
  },
  {
    id: 2,
    title: "Example Series 1",
    type: "series",
    first_air_date: "2025-01-09",
    backdrop_path:
      "https://occ-0-4960-988.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABf2jhrphpnR1nDGVUbI5oghPF6ILAS6siZm0jUkVYad15O40sbHIUfJU5lkwYmOkLI4PHqV_sNsvNm59XdiFFHYlS0QQIo3t2j11dKDjutpd0vsrQI9XTpGHa6sTjP7I-OHw.jpg?r=1ca",
    poster_path:
      "https://occ-0-4960-988.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABUcJcQ4IEkbo5D2KOk_MaejlkWr1U2m2ag1xoaQt2WfWOI6lUW4BSg5cMQz_lXMImPldol5woNK_JP0GH7GfQ8JfCYZf75vzLtC5mbS7Sdh-Fpz9PFecEH1lcSjyd5Oe_QfdvieTu6fyhCe07kP94330lfkOLJ8ZVfV5v01XjlCZgud1tgzJopgmL2Io6GEk8fdpc0qaNLOqiRRqbAaG7J0JInU1xgeQnqaIf7bHvLBDHTaPRAwACUvGmQB7cNym87fuCkEDZgosAKvO27ci38XsxHtbJEwMe7yA-MQCKvAn70ECOUITfSxeslLdDMmMHR24oV7PPAXEjRDDikc4WFTThkWPxZTOyQwpoLjseVhTmW3jXvVZ9Ph9VvALLsfao1LpXbK9IgZgGBqgPbXPLQQ4UGo7WMYXpO_OKmLQeQn27w.webp?r=adf",
  },
  {
    id: 3,
    title: "Example Movie 2",
    type: "movie",
    release_date: "2024-11-20",
    backdrop_path:
      "https://occ-0-4960-988.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXtJtp1IyQpU9bbGxP32YS2wOMJDtgogIBzxC4sSNdBoeHJ1w5LP0etCOoE30LH8TqY1cn22nUKXo4YFnjJp-u5zmeY2zDlajCM.webp?r=965",
    poster_path:
      "https://occ-0-4960-988.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQpaAaVDsiYwgiiE5reeGjkzHYIUTq5gYbI41fhAFsHe8I7nvn_3jlvhDLcEU-be-29ABcz9xE2Ses7o-zishjh3HMZLRqSWakOr.webp?r=a64",
  },
];

const MyList = () => {
  return (
    <div className="my-2 mx-12">
      <section className="my-list-header mb-24">
        <h1 className="text-[21px]">내가 찜한 리스트</h1>
      </section>
      <section className="my-list-main mb-80">
        <CardGrid cardProps={dummyData} />
      </section>
    </div>
  );
};

export default MyList;

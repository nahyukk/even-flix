const dummyMoviesAndSeries = [
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
  {
    id: 4,
    title: "Example Series 2",
    type: "series",
    first_air_date: "2024-11-15",
    backdrop_path:
      "https://occ-0-4960-988.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcS2JPIV3anXe7XByosrzf7pqj8et0NrD3boVE48aSJ7husNRjRF1XNviyxnanlYMh7IVMxmrrSHqQtOMx8QnKIR8r9d3pC4IPc.webp?r=bfe",
    poster_path:
      "https://occ-0-4960-988.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQpaAaVDsiYwgiiE5reeGjkzHYIUTq5gYbI41fhAFsHe8I7nvn_3jlvhDLcEU-be-29ABcz9xE2Ses7o-zishjh3HMZLRqSWakOr.webp?r=a64",
  },
  {
    id: 5,
    title: "Example Movie 3",
    type: "movie",
    release_date: "2025-01-08",
    backdrop_path:
      "https://occ-0-4960-988.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABf2jhrphpnR1nDGVUbI5oghPF6ILAS6siZm0jUkVYad15O40sbHIUfJU5lkwYmOkLI4PHqV_sNsvNm59XdiFFHYlS0QQIo3t2j11dKDjutpd0vsrQI9XTpGHa6sTjP7I-OHw.jpg?r=1ca",
    poster_path:
      "https://occ-0-4960-988.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABUcJcQ4IEkbo5D2KOk_MaejlkWr1U2m2ag1xoaQt2WfWOI6lUW4BSg5cMQz_lXMImPldol5woNK_JP0GH7GfQ8JfCYZf75vzLtC5mbS7Sdh-Fpz9PFecEH1lcSjyd5Oe_QfdvieTu6fyhCe07kP94330lfkOLJ8ZVfV5v01XjlCZgud1tgzJopgmL2Io6GEk8fdpc0qaNLOqiRRqbAaG7J0JInU1xgeQnqaIf7bHvLBDHTaPRAwACUvGmQB7cNym87fuCkEDZgosAKvO27ci38XsxHtbJEwMe7yA-MQCKvAn70ECOUITfSxeslLdDMmMHR24oV7PPAXEjRDDikc4WFTThkWPxZTOyQwpoLjseVhTmW3jXvVZ9Ph9VvALLsfao1LpXbK9IgZgGBqgPbXPLQQ4UGo7WMYXpO_OKmLQeQn27w.webp?r=adf",
  },
  {
    id: 6,
    title: "Example Series 3",
    type: "series",
    first_air_date: "2024-11-10",
    backdrop_path:
      "https://occ-0-4960-988.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXtJtp1IyQpU9bbGxP32YS2wOMJDtgogIBzxC4sSNdBoeHJ1w5LP0etCOoE30LH8TqY1cn22nUKXo4YFnjJp-u5zmeY2zDlajCM.webp?r=965",
    poster_path:
      "https://occ-0-4960-988.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQpaAaVDsiYwgiiE5reeGjkzHYIUTq5gYbI41fhAFsHe8I7nvn_3jlvhDLcEU-be-29ABcz9xE2Ses7o-zishjh3HMZLRqSWakOr.webp?r=a64",
  },
  {
    id: 7,
    title: "Example Movie 4",
    type: "movie",
    release_date: "2024-11-05",
    backdrop_path:
      "https://occ-0-4960-988.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcS2JPIV3anXe7XByosrzf7pqj8et0NrD3boVE48aSJ7husNRjRF1XNviyxnanlYMh7IVMxmrrSHqQtOMx8QnKIR8r9d3pC4IPc.webp?r=bfe",
    poster_path:
      "https://occ-0-4960-988.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQpaAaVDsiYwgiiE5reeGjkzHYIUTq5gYbI41fhAFsHe8I7nvn_3jlvhDLcEU-be-29ABcz9xE2Ses7o-zishjh3HMZLRqSWakOr.webp?r=a64",
  },
  {
    id: 8,
    title: "Example Series 4",
    type: "series",
    first_air_date: "2025-01-07",
    backdrop_path:
      "https://occ-0-4960-988.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABf2jhrphpnR1nDGVUbI5oghPF6ILAS6siZm0jUkVYad15O40sbHIUfJU5lkwYmOkLI4PHqV_sNsvNm59XdiFFHYlS0QQIo3t2j11dKDjutpd0vsrQI9XTpGHa6sTjP7I-OHw.jpg?r=1ca",
    poster_path:
      "https://occ-0-4960-988.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQpaAaVDsiYwgiiE5reeGjkzHYIUTq5gYbI41fhAFsHe8I7nvn_3jlvhDLcEU-be-29ABcz9xE2Ses7o-zishjh3HMZLRqSWakOr.webp?r=a64",
  },
  {
    id: 9,
    title: "Example Movie 5",
    type: "movie",
    release_date: "2024-11-28",
    backdrop_path:
      "https://occ-0-4960-988.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXtJtp1IyQpU9bbGxP32YS2wOMJDtgogIBzxC4sSNdBoeHJ1w5LP0etCOoE30LH8TqY1cn22nUKXo4YFnjJp-u5zmeY2zDlajCM.webp?r=965",
    poster_path:
      "https://occ-0-4960-988.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQpaAaVDsiYwgiiE5reeGjkzHYIUTq5gYbI41fhAFsHe8I7nvn_3jlvhDLcEU-be-29ABcz9xE2Ses7o-zishjh3HMZLRqSWakOr.webp?r=a64",
  },
  {
    id: 10,
    title: "Example Series 5",
    type: "series",
    first_air_date: "2024-11-25",
		backdrop_path:
      "https://occ-0-4960-988.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABf2jhrphpnR1nDGVUbI5oghPF6ILAS6siZm0jUkVYad15O40sbHIUfJU5lkwYmOkLI4PHqV_sNsvNm59XdiFFHYlS0QQIo3t2j11dKDjutpd0vsrQI9XTpGHa6sTjP7I-OHw.jpg?r=1ca",
    poster_path:
      "https://occ-0-4960-988.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABUcJcQ4IEkbo5D2KOk_MaejlkWr1U2m2ag1xoaQt2WfWOI6lUW4BSg5cMQz_lXMImPldol5woNK_JP0GH7GfQ8JfCYZf75vzLtC5mbS7Sdh-Fpz9PFecEH1lcSjyd5Oe_QfdvieTu6fyhCe07kP94330lfkOLJ8ZVfV5v01XjlCZgud1tgzJopgmL2Io6GEk8fdpc0qaNLOqiRRqbAaG7J0JInU1xgeQnqaIf7bHvLBDHTaPRAwACUvGmQB7cNym87fuCkEDZgosAKvO27ci38XsxHtbJEwMe7yA-MQCKvAn70ECOUITfSxeslLdDMmMHR24oV7PPAXEjRDDikc4WFTThkWPxZTOyQwpoLjseVhTmW3jXvVZ9Ph9VvALLsfao1LpXbK9IgZgGBqgPbXPLQQ4UGo7WMYXpO_OKmLQeQn27w.webp?r=adf",
	}
];

export default dummyMoviesAndSeries;
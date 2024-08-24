import StepForm from "@/components/StepForm";

const Questionnaire: React.FC = () => {
  const steps = [
    {
      title: "Boleh bantu isi data diri kakak?",
      questions: [
        { question: "Isi Nama Kamu", inputType: "text" },
        { question: "No. HP", inputType: "text" },
        { question: "Asal Kota", inputType: "text" },
      ],
    },
    {
      questions: [
        {
          question: "Bagaimana rasa Jodough yang Natijen coba kali ini?",
          inputType: "select",
          options: [
            "Super enak! Wajib coba lagi.",
            "Enak, tapi masih bisa lebih baik.",
            "Biasa saja, nothing special.",
            "Kurang suka, bisa diperbaiki.",
          ],
        },
      ],
    },
    {
      questions: [
        {
          question: "Apakah rasa Jodough sesuai dengan ekspektasi Natijen?",
          inputType: "select",
          options: [
            "Sesuai banget!",
            "Hampir sesuai.",
            "Sedikit mengecewakan.",
            "Tidak sesuai sama sekali.",
          ],
        },
      ],
    },
    {
      questions: [
        {
          question: "Bagaimana tampilan Jodough menurut Natijen?",
          inputType: "select",
          options: [
            "Menarik, pingin langsung foto!",
            "Cukup menarik, tapi masih bisa lebih keren.",
            "Biasa saja, gak terlalu spesial.",
            "Kurang menarik, perlu diperbaiki.",
          ],
        },
      ],
    },
    {
      questions: [
        {
          question: "Seberapa pas ukuran dan porsi Jodough buat Natijen?",
          inputType: "select",
          options: [
            "Pas banget, sesuai selera!",
            "Agak/terlalu kebesaran.",
            "Agak/terlalu kekecilan.",
            "Tidak pas sama sekali.",
          ],
        },
      ],
    },
    {
      questions: [
        {
          question:
            "Bagaimana Natijen menilai variasi rasa yang Jodough tawarkan?",
          inputType: "select",
          options: [
            "Variasinya pas dan beragam!",
            "Lumayan, tapi bisa ditambah lagi.",
            "Terbatas, perlu lebih banyak pilihan.",
            "Kurang variatif.",
          ],
        },
      ],
    },
    {
      questions: [
        {
          question:
            "Apa kesan pertama Natijen saat melihat dan mencicipi Jodough?",
          inputType: "select",
          options: [
            "Wow, ini pasti enak banget!",
            "Menarik, pengen coba.",
            "Biasa aja, nggak bikin penasaran.",
            "Kurang menarik, nggak sesuai harapan.",
          ],
        },
      ],
    },
    {
      questions: [
        {
          question:
            "Apa yang bisa Jodough perbaiki dari segi rasa dan tampilan menurut Natijen?",
          inputType: "select",
          options: [
            "Tidak perlu, sudah sempurna!",
            "Sedikit penyesuaian di rasa.",
            "Sedikit penyesuaian di tampilan.",
            "Beberapa hal perlu diperbaiki.",
          ],
        },
      ],
    },
    {
      questions: [
        {
          question:
            "Seberapa baik pengetahuan staff Jodough tentang produk yang ditawarkan?",
          inputType: "select",
          options: [
            "Sangat baik, semua pertanyaan terjawab.",
            "Cukup baik, sebagian besar dijawab.",
            "Kurang memuaskan, banyak yang tidak tahu.",
            "Sangat buruk, perlu pelatihan lagi.",
          ],
        },
      ],
    },
    {
      questions: [
        {
          question: "Apakah kakak disambut dengan ramah oleh staff Jodough?",
          inputType: "select",
          options: [
            "Disambut dengan meriah !!",
            "Disambut tapi lemas banget",
            "Di cuek in, bikin ilfil",
          ],
        },
      ],
    },
    {
      questions: [
        {
          question: "Bagaimana kesopanan staff Jodough menurut Natijen?",
          inputType: "select",
          options: [
            "Sangat sopan dan menghargai pelanggan.",
            "Cukup sopan, tapi bisa lebih baik.",
            "Kurang sopan, agak mengecewakan.",
            "Tidak sopan sama sekali.",
          ],
        },
      ],
    },
    {
      questions: [
        {
          question:
            "Seberapa puas Natijen dengan kerapian penampilan staff Jodough?",
          inputType: "select",
          options: [
            "Sangat puas, rapi dan profesional.",
            "Cukup puas, tapi bisa lebih rapi.",
            "Kurang puas, penampilan kurang rapi.",
            "Tidak puas, sangat tidak rapi.",
          ],
        },
      ],
    },
    {
      questions: [
        {
          question:
            "Apakah staff Jodough mampu menjawab pertanyaan Natijen dengan jelas dan informatif?",
          inputType: "select",
          options: [
            "Sangat jelas dan informatif.",
            "Cukup jelas, tapi bisa lebih baik.",
            "Kurang jelas, banyak yang tidak dimengerti.",
            "Tidak jelas sama sekali.",
          ],
        },
      ],
    },
    {
      questions: [
        {
          question:
            "Apakah Natijen merasa nyaman berinteraksi dengan staff Jodough?",
          inputType: "select",
          options: [
            "Sangat nyaman, mereka friendly!",
            "Cukup nyaman, tapi bisa lebih baik.",
            "Kurang nyaman, interaksi terasa kaku.",
            "Tidak nyaman sama sekali.",
          ],
        },
      ],
    },
    {
      questions: [
        {
          question:
            "Apa yang bisa Jodough perbaiki dalam hal pelayanan staff menurut Natijen?",
          inputType: "select",
          options: [
            "Tidak perlu, sudah sempurna!",
            "Sedikit perbaikan dalam keramahan/sikap.",
            "Beberapa hal perlu diperbaiki.",
            "Banyak yang perlu diperbaiki.",
          ],
        },
      ],
    },
    {
      questions: [
        {
          question:
            "Bagaimana kesan pertama Natijen tentang kebersihan outlet Jodough?",
          inputType: "select",
          options: [
            "Sangat bersih, bikin betah.",
            "Cukup bersih, tapi bisa lebih baik.",
            "Agak kurang bersih, perlu diperbaiki.",
            "Tidak bersih sama sekali.",
          ],
        },
      ],
    },
    {
      questions: [
        {
          question:
            "Apakah Natijen merasa nyaman saat berada di outlet Jodough?",
          inputType: "select",
          options: [
            "Sangat nyaman, suasana mendukung!",
            "Cukup nyaman, tapi bisa lebih cozy.",
            "Kurang nyaman, suasana kurang mendukung.",
            "Tidak nyaman sama sekali.",
          ],
        },
      ],
    },
    {
      questions: [
        {
          question:
            "Bagaimana menurut Natijen, tata letak dan dekorasi outlet Jodough?",
          inputType: "select",
          options: [
            "Sangat menarik, bikin betah.",
            "Cukup menarik, tapi bisa ditingkatkan.",
            "Biasa saja, tidak ada yang spesial.",
            "Kurang menarik, perlu banyak perubahan.",
          ],
        },
      ],
    },
    {
      questions: [
        {
          question:
            "Apakah fasilitas yang ada di outlet Jodough sudah memenuhi kebutuhan Natijen?",
          inputType: "select",
          options: [
            "Sangat lengkap, semuanya ada!",
            "Cukup lengkap, tapi bisa ditambah.",
            "Kurang lengkap, perlu lebih banyak fasilitas.",
            "Sangat tidak lengkap.",
          ],
        },
      ],
    },
    {
      questions: [
        {
          question:
            "Bagaimana pendapat Natijen tentang kebersihan area makan di outlet Jodough?",
          inputType: "select",
          options: [
            "Sangat bersih, nyaman makan di sini.",
            "Cukup bersih, tapi bisa lebih dijaga.",
            "Kurang bersih, perlu lebih diperhatikan.",
            "Tidak bersih sama sekali.",
          ],
        },
      ],
    },
    {
      questions: [
        {
          question:
            "Seberapa puas Natijen dengan ketersediaan tempat duduk dan suasana di outlet Jodough?",
          inputType: "select",
          options: [
            "Sangat puas, tempat duduk dan suasana oke banget!",
            "Cukup puas, tapi bisa lebih nyaman.",
            "Kurang puas, sering kesulitan dapat tempat.",
            "Tidak puas sama sekali.",
          ],
        },
      ],
    },
    {
      questions: [
        {
          question:
            "Apa yang bisa Jodough tambahkan atau perbaiki dari segi kenyamanan dan fasilitas outlet menurut Natijen?",
          inputType: "select",
          options: [
            "Tidak perlu, sudah sempurna!",
            "Tambah sedikit dekorasi/fasilitas.",
            "Banyak yang perlu diperbaiki.",
            "Perlu renovasi besar-besaran.",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center flex-col text-white px-4 ">
      <div className={`text-2xl font-semibold text-center mb-4`}>
        Customer Feedback Form
      </div>
      <StepForm steps={steps} />
    </div>
  );
};

export default Questionnaire;

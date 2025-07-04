// This file contains all the data and logic for the new two-column layout.
// Make sure this file is in the same directory as the HTML file.

document.addEventListener('DOMContentLoaded', function() {
    
    // --- DATA STORE ---
    // This array holds all 52 administrative procedure data points.
    const procedures = [
      {
    "id": "1.012756",
    "name": "Đăng ký đất đai lần đầu đối với trường hợp được Nhà nước giao đất để quản lý",
    "level": "Tỉnh",
    "status": "Sửa đổi",
    "processingTime": "Không quá 17 ngày làm việc",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường \n b) Nộp thông qua dịch vụ bưu chính\n c) Nộp trên Cổng Dịch vụ công quốc gia (Toàn trình)",
    "agency": "(1) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai",
    "fees": {
      "description": "Đơn giá đăng ký và Cấp giấy chứng nhận.",
      "details": [
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Đối với đất",
          "cost": "1.622.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Đối với tài sản",
          "cost": "1.591.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Đối với đất và tài sản",
          "cost": "2.082.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý)",
          "service": "Đối với đất",
          "cost": "1.349.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý)",
          "service": "Đối với tài sản",
          "cost": "1.346.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý)",
          "service": "Đối với cả đất và tài sản",
          "cost": "1.732.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ cá nhân (Cấp mới)",
          "service": "Đối với đất",
          "cost": "923.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ cá nhân (Cấp mới)",
          "service": "Đối với tài sản",
          "cost": "1.062.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ cá nhân (Cấp mới)",
          "service": "Đối với đất và tài sản",
          "cost": "1.351.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ cá nhân (Chỉnh lý)",
          "service": "Đối với đất",
          "cost": "570.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ cá nhân (Chỉnh lý)",
          "service": "Đối với tài sản",
          "cost": "706.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ cá nhân (Chỉnh lý)",
          "service": "Đối với cả đất và tài sản",
          "cost": "860.000 đồng/giấy"
        }
      ],
      "le_phi": "* Đối với hồ sơ tổ chức:\n- Cấp mới giấy chứng nhận: 100.000 đồng/giấy.\n- Chỉnh lý Giấy chứng nhận đã cấp: 25.000 đồng/giấy.\n* Đối với hồ sơ cá nhân (chỉ áp dụng đối với hộ gia đình, cá nhân tại phường thuộc thị xã, thị trấn thuộc huyện): 25.000 đồng/giấy.",
      "exemption": null
    },
    "legalBasis": "(1) Luật Đất đai số 31/2024/QH15 ngày 18/01/2024 được sửa đổi bổ sung một số điều bởi Luật số 43/2024/QH15, Luật số 47/2024/QH15 và Luật số 58/2024/QH15 của Quốc hội.\n(2) Nghị định số 101/2024/NĐ-CP ngày 29/7/2024 của Chính phủ quy định về điều tra cơ bản đất đai; đăng ký, cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất và Hệ thống thông tin đất đai.\n(3) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ quy định về việc thực hiện thủ tục hành chính theo cơ chế một cửa, một cửa liên thông tại Bộ phận Một cửa và Cổng Dịch vụ công quốc gia.\n(4) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ quy định về phân định thẩm quyền của chính quyền địa phương 02 cấp, phân quyền, phân cấp trong lĩnh vực đất đai.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đăng ký đất đai, tài sản gắn liền với đất theo Mẫu số 15 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Báo cáo kết quả rà soát hiện trạng sử dụng đất của người được giao quản lý đất theo Mẫu số 15đ ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Quyết định giao đất để quản lý của cơ quan nhà nước có thẩm quyền.",
      "Chứng từ thực hiện nghĩa vụ tài chính; giấy tờ liên quan đến việc miễn, giảm nghĩa vụ tài chính về đất đai, tài sản gắn liền với đất (nếu có)."
    ]
  },
  {
    "id": "1.012766",
    "name": "Xóa đăng ký thuê, cho thuê lại quyền sử dụng đất trong dự án xây dựng kinh doanh kết cấu hạ tầng",
    "level": "Tỉnh",
    "status": "Sửa đổi",
    "processingTime": "Không quá 03 ngày làm việc",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường \n b) Nộp thông qua dịch vụ bưu chính\n c) Nộp trên Cổng Dịch vụ công quốc gia (Một phần)",
    "agency": "Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai",
    "fees": {
      "description": null,
      "details": [],
      "le_phi": "Không có",
      "exemption": null
    },
    "legalBasis": "(1) Luật Đất đai số 31/2024/QH15 ngày 18/01/2024 được sửa đổi bổ sung một số điều bởi Luật số 43/2024/QH15, Luật số 47/2024/QH15 và Luật số 58/2024/QH15 của Quốc hội.\n(2) Nghị định số 101/2024/NĐ-CP ngày 29/7/2024 của Chính phủ quy định về điều tra cơ bản đất đai; đăng ký, cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất và Hệ thống thông tin đất đai.\n(3) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ quy định về việc thực hiện thủ tục hành chính theo cơ chế một cửa, một cửa liên thông tại Bộ phận Một cửa và Cổng Dịch vụ công quốc gia.\n(4) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ quy định về phân định thẩm quyền của chính quyền địa phương 02 cấp, phân quyền, phân cấp trong lĩnh vực đất đai.\n(5) Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(6) Nghị quyết 22/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(7) Quyết định 19/2021/QĐ-UBND ngày 10/6/2021 về Đơn giá đo đạc địa chính, đăng ký đất đai, tài sản gắn liền với đất, lập hồ sơ địa chính, cấp giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản khác gắn liền với đất, xây dựng cơ sở dữ liệu đất đai trên địa bàn tỉnh Bình Phước.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Văn bản về việc xóa cho thuê, xóa cho thuê lại quyền sử dụng đất (ví dụ: Hợp đồng thanh lý).",
      "Bản gốc Giấy chứng nhận đã cấp."
    ]
  },
  {
    "id": "1.012793",
    "name": "Đăng ký biến động đối với trường hợp thành viên của hộ gia đình hoặc cá nhân đang sử dụng đất thành lập doanh nghiệp tư nhân và sử dụng đất vào hoạt động sản xuất kinh doanh của doanh nghiệp",
    "level": "Tỉnh",
    "status": "Sửa đổi",
    "processingTime": "Không quá 08 ngày làm việc",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh hoặc Trung tâm Phục vụ hành chính công xã, phường nơi chi nhánh Văn phòng Đăng ký đất đai đặt trụ sở\n b) Nộp thông qua dịch vụ bưu chính\n c) Nộp trên Cổng Dịch vụ công quốc gia (Một phần)",
    "agency": "Văn phòng Đăng ký đất đai",
    "fees": {
      "description": "Đơn giá đăng ký và cấp Giấy chứng nhận.",
      "details": [
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Đối với đất",
          "cost": "1.622.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Đối với tài sản",
          "cost": "1.591.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Đối với cả đất và tài sản",
          "cost": "2.082.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý)",
          "service": "Đối với đất",
          "cost": "1.408.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý)",
          "service": "Đối với tài sản",
          "cost": "1.397.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý)",
          "service": "Đối với cả đất và tài sản",
          "cost": "1.803.000 đồng/giấy"
        }
      ],
      "le_phi": "* Đối với trường hợp cấp mới giấy chứng nhận: 100.000 đồng/giấy.\n* Đối với trường hợp chỉnh lý Giấy chứng nhận đã cấp: 25.000 đồng/giấy.",
      "exemption": null
    },
    "legalBasis": "(1) Luật Đất đai số 31/2024/QH15 ngày 18/01/2024 được sửa đổi bổ sung một số điều bởi Luật số 43/2024/QH15, Luật số 47/2024/QH15 và Luật số 58/2024/QH15 của Quốc hội.\n(2) Nghị định số 101/2024/NĐ-CP ngày 29/7/2024 của Chính phủ quy định về điều tra cơ bản đất đai, đăng ký, cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất và Hệ thống thông tin đất đai.\n(3) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ quy định về việc thực hiện thủ tục hành chính theo cơ chế một cửa, một cửa liên thông tại Bộ phận Một cửa và Cổng Dịch vụ công quốc gia.\n(4) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ quy định về phân định thẩm quyền của chính quyền địa phương 02 cấp, phân quyền, phân cấp trong lĩnh vực đất đai.\n(5) Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(6) Nghị quyết 22/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(7) Quyết định 19/2021/QĐ-UBND ngày 10/6/2021 về Đơn giá đo đạc địa chính, đăng ký đất đai, tài sản gắn liền với đất, lập hồ sơ địa chính, cấp giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản khác gắn liền với đất, xây dựng cơ sở dữ liệu đất đai trên địa bàn tỉnh Bình Phước.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đăng ký biến động đất đai, tài sản gắn liền với đất theo Mẫu số 18 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Bản gốc Giấy chứng nhận đã cấp.",
      "Giấy chứng nhận đăng ký doanh nghiệp tư nhân.",
      "Văn bản thỏa thuận của các thành viên trong hộ gia đình sử dụng đất đồng ý cho thành viên đó sử dụng quyền sử dụng đất của hộ gia đình để thành lập doanh nghiệp tư nhân (đối với trường hợp đất của hộ gia đình)."
    ]
  },
  {
    "id": "1.012781",
    "name": "Đăng ký, cấp Giấy chứng nhận đối với thửa đất có diện tích tăng thêm do thay đổi ranh giới so với Giấy chứng nhận đã cấp",
    "level": "Tỉnh",
    "status": "Sửa đổi",
    "processingTime": "- Không quá 10 ngày làm việc đối với trường hợp thửa đất gốc đã có Giấy chứng nhận, phần diện tích tăng thêm do nhận chuyển quyền sử dụng một phần thửa đất đã được cấp Giấy chứng nhận.\n- Không quá 20 ngày làm việc đối với trường hợp thửa đất gốc đã có Giấy chứng nhận, phần diện tích tăng thêm chưa được cấp Giấy chứng nhận.",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường \n b) Nộp thông qua dịch vụ bưu chính\n c) Nộp trên Cổng Dịch vụ công quốc gia (Một phần)",
    "agency": "(1) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai\n(2) Cơ quan thuế (nếu có)",
    "fees": {
      "description": "Đơn giá đăng ký và Cấp giấy chứng nhận. Ghi chú: Trường hợp cấp một Giấy chứng nhận cho nhiều thửa đất thì đơn giá đối với mỗi thửa đất tăng: 204.000 đồng/giấy.",
      "details": [
        {
          "type": "Hồ sơ cá nhân (Cấp mới)",
          "service": "Đối với đất",
          "cost": "1.949.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ cá nhân (Cấp mới)",
          "service": "Đối với tài sản",
          "cost": "1.970.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ cá nhân (Cấp mới)",
          "service": "Đối với đất và tài sản",
          "cost": "2.793.000 đồng/giấy"
        }
      ],
      "le_phi": "Lệ phí đăng ký và cấp giấy (chỉ áp dụng đối với hộ gia đình, cá nhân tại phường thuộc thị xã, thị trấn thuộc huyện): 125.000 đồng/giấy.",
      "exemption": null
    },
    "legalBasis": "(1) Luật Đất đai số 31/2024/QH15 ngày 18/01/2024 được sửa đổi bổ sung một số điều bởi Luật số 43/2024/QH15, Luật số 47/2024/QH15 và Luật số 58/2024/QH15 của Quốc hội.\n(2) Nghị định số 101/2024/NĐ-CP ngày 29/7/2024 của Chính phủ quy định về điều tra cơ bản đất đai, đăng ký, cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất và Hệ thống thông tin đất đai.\n(3) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ quy định về việc thực hiện thủ tục hành chính theo cơ chế một cửa, một cửa liên thông tại Bộ phận Một cửa và Cổng Dịch vụ công quốc gia.\n(4) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ quy định về phân định thẩm quyền của chính quyền địa phương 02 cấp, phân quyền, phân cấp trong lĩnh vực đất đai.\n(5) Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(6) Nghị quyết 22/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(7) Quyết định 19/2021/QĐ-UBND ngày 10/6/2021 về Đơn giá đo đạc địa chính, đăng ký đất đai, tài sản gắn liền với đất, lập hồ sơ địa chính, cấp giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản khác gắn liền với đất, xây dựng cơ sở dữ liệu đất đai trên địa bàn tỉnh Bình Phước.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đăng ký biến động đất đai, tài sản gắn liền với đất theo Mẫu số 18 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Bản gốc Giấy chứng nhận đã cấp.",
      "Giấy tờ về việc nhận chuyển quyền sử dụng đất của phần diện tích tăng thêm.",
      "Chứng từ thực hiện nghĩa vụ tài chính; giấy tờ liên quan đến việc miễn, giảm nghĩa vụ tài chính về đất đai, tài sản gắn liền với đất (nếu có)."
    ]
  },
  {
    "id": "1.012782",
    "name": "Đăng ký, cấp Giấy chứng nhận đối với trường hợp cá nhân, hộ gia đình đã được cấp Giấy chứng nhận một phần diện tích vào loại đất ở trước ngày 01 tháng 7 năm 2004, phần diện tích còn lại của thửa đất chưa được cấp Giấy chứng nhận",
    "level": "Tỉnh",
    "status": "Sửa đổi",
    "processingTime": "- Không quá 20 ngày làm việc đối với trường hợp người sử dụng đất có nhu cầu xác định lại diện tích đất ở.\n- Không quá 15 ngày làm việc đối với trường hợp người sử dụng đất không có nhu cầu xác định lại diện tích đất ở.",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường \n b) Nộp thông qua dịch vụ bưu chính\n c) Nộp trên Cổng Dịch vụ công quốc gia (Một phần)",
    "agency": "(1) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai\n(2) Cơ quan thuế (nếu có)",
    "fees": {
      "description": "Đơn giá đăng ký và Cấp giấy chứng nhận.",
      "details": [
        {
          "type": "Hồ sơ cá nhân (Cấp mới)",
          "service": "Đối với đất",
          "cost": "923.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ cá nhân (Cấp mới)",
          "service": "Đối với tài sản",
          "cost": "1.062.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ cá nhân (Cấp mới)",
          "service": "Đối với đất và tài sản",
          "cost": "1.351.000 đồng/giấy"
        }
      ],
      "le_phi": "* Đối với đất: 25.000 đồng/giấy.\n* Đối với đất và tài sản: 100.000 đồng/giấy.",
      "exemption": null
    },
    "legalBasis": "(1) Luật Đất đai số 31/2024/QH15 ngày 18/01/2024 được sửa đổi bổ sung một số điều bởi Luật số 43/2024/QH15, Luật số 47/2024/QH15 và Luật số 58/2024/QH15 của Quốc hội.\n(2) Nghị định số 101/2024/NĐ-CP ngày 29/7/2024 của Chính phủ quy định về điều tra cơ bản đất đai; đăng ký, cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất và Hệ thống thông tin đất đai.\n(3) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ quy định về việc thực hiện thủ tục hành chính theo cơ chế một cửa, một cửa liên thông tại Bộ phận Một cửa và Cổng Dịch vụ công quốc gia.\n(4) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ quy định về phân định thẩm quyền của chính quyền địa phương 02 cấp, phân quyền, phân cấp trong lĩnh vực đất đai.\n(5) Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(6) Nghị quyết 22/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(7) Quyết định 19/2021/QĐ-UBND ngày 10/6/2021 về Đơn giá đo đạc địa chính, đăng ký đất đai, tài sản gắn liền với đất, lập hồ sơ địa chính, cấp giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản khác gắn liền với đất, xây dựng cơ sở dữ liệu đất đai trên địa bàn tỉnh Bình Phước.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đăng ký biến động đất đai, tài sản gắn liền với đất theo Mẫu số 18 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Bản gốc Giấy chứng nhận đã cấp."
    ]
  },
      {
    "id": "1.012783",
    "name": "Cấp đổi Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất",
    "level": "Tỉnh",
    "status": "Sửa đổi",
    "processingTime": "- Không quá 05 ngày làm việc đối với trường hợp quy định tại các điểm a, b, c, d, e và g Mục 1 Phần VII của phần C Trình tự, thủ tục đăng ký đất đai, tài sản gắn liền với đất tại Nghị định số 151/2025/NĐ-CP ngày 12/6/2025.\n- Không quá 10 ngày làm việc đối với trường hợp quy định tại điểm h Mục 1 Phần VII của phần C Trình tự, thủ tục đăng ký đất đai, tài sản gắn liền với đất tại Nghị định số 151/2025/NĐ-CP ngày 12/6/2025.\n- Trường hợp cấp đổi đồng loạt cho nhiều người sử dụng đất do đo đạc lập bản đồ địa chính thì thời gian thực hiện theo dự án đã được cơ quan có thẩm quyền phê duyệt.",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường \n b) Nộp thông qua dịch vụ bưu chính\n c) Nộp trên Cổng Dịch vụ công quốc gia",
    "agency": "(1) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai\n(2) Cơ quan thuế (nếu có)",
    "fees": {
      "description": "Đơn giá đăng ký và cấp Giấy chứng nhận. Ghi chú: Trường hợp một thửa đất có nhiều hộ gia đình, cá nhân đồng sử dụng thì phải cấp mỗi người đồng sử dụng một giấy chứng nhận, mỗi giấy chứng nhận cấp thêm cho người đồng sử dụng thu 50.000 đồng/người đồng sử dụng. Trường hợp tổ chức đề nghị cấp giấy chứng nhận đối với các dự án có nhiều thửa đất, giấy chứng nhận cấp từ thửa thứ hai thu 50.000 đồng/GCN/thửa đất.",
      "details": [
        {
          "type": "Hồ sơ hộ gia đình, cá nhân",
          "service": "Cấp GCN quyền sử dụng đất",
          "cost": "880.000 đồng/GCN"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân",
          "service": "Cấp GCN về tài sản",
          "cost": "980.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân",
          "service": "Cấp GCN đối với cả đất và tài sản",
          "cost": "1.250.000 đồng/GCN"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (VPĐKĐĐ cấp - Cấp mới)",
          "service": "Cấp GCN quyền sử dụng đất",
          "cost": "530.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (VPĐKĐĐ cấp - Cấp mới)",
          "service": "Cấp GCN về tài sản",
          "cost": "580.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (VPĐKĐĐ cấp - Cấp mới)",
          "service": "Cấp GCN đối với cả đất và tài sản",
          "cost": "720.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (VPĐKĐĐ cấp - Chỉnh lý)",
          "service": "Chứng nhận biến động về quyền sử dụng đất",
          "cost": "450.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (VPĐKĐĐ cấp - Chỉnh lý)",
          "service": "Chứng nhận biến động về tài sản",
          "cost": "470.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (VPĐKĐĐ cấp - Chỉnh lý)",
          "service": "Chứng nhận biến động cả đất và tài sản",
          "cost": "590.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ tổ chức (VPĐKĐĐ cấp)",
          "service": "Cấp GCN quyền sử dụng đất",
          "cost": "990.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ tổ chức (VPĐKĐĐ cấp)",
          "service": "Cấp GCN về tài sản",
          "cost": "940.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ tổ chức (VPĐKĐĐ cấp)",
          "service": "Cấp GCN đối với cả đất và tài sản",
          "cost": "1.250.000 đồng/hồ sơ/thửa/GCN"
        }
      ],
      "le_phi": "Lệ phí đăng ký và cấp giấy: 50.000 đồng/giấy.",
      "exemption": null
    },
    "legalBasis": "(1) Luật Đất đai số 31/2024/QH15 ngày 18/01/2024 được sửa đổi bổ sung một số điều bởi Luật số 43/2024/QH15, Luật số 47/2024/QH15 và Luật số 58/2024/QH15 của Quốc hội.\n(2) Nghị định số 101/2024/NĐ-CP ngày 29/7/2024 của Chính phủ quy định về điều tra cơ bản đất đai; đăng ký, cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất và Hệ thống thông tin đất đai.\n(3) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ quy định về việc thực hiện thủ tục hành chính theo cơ chế một cửa, một cửa liên thông tại Bộ phận Một cửa và Cổng Dịch vụ công quốc gia.\n(4) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ quy định về phân định thẩm quyền của chính quyền địa phương 02 cấp, phân quyền, phân cấp trong lĩnh vực đất đai.\n(5) Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(6) Nghị quyết 22/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(7) Quyết định 19/2021/QĐ-UBND ngày 10/6/2021 về Đơn giá đo đạc địa chính, đăng ký đất đai, tài sản gắn liền với đất, lập hồ sơ địa chính, cấp giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản khác gắn liền với đất, xây dựng cơ sở dữ liệu đất đai trên địa bàn tỉnh Bình Phước.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đăng ký biến động đất đai, tài sản gắn liền với đất theo Mẫu số 18 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Bản gốc Giấy chứng nhận đã cấp."
    ]
  },
  {
    "id": "1.012784",
    "name": "Tách thửa hoặc hợp thửa đất",
    "level": "Tỉnh",
    "status": "Sửa đổi",
    "processingTime": "Không quá 12 ngày làm việc",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường \n b) Nộp thông qua dịch vụ bưu chính\n c) Nộp trên Cổng Dịch vụ công quốc gia (Một phần)",
    "agency": "Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai",
    "fees": {
      "description": "Đơn giá đăng ký và cấp Giấy chứng nhận. Ghi chú: trường hợp nhiều thửa đất lập chung trong 1 hồ sơ và cấp chung 1 GCN hoặc 1 hồ sơ mà nhiều GCN thì đơn giá đối với mỗi thửa đất (GCN) tăng thêm là: 251.000 đồng/giấy.",
      "details": [
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Cấp GCN quyền sử dụng đất",
          "cost": "1.170.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Cấp GCN về tài sản",
          "cost": "1.180.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Cấp GCN đối với cả đất và tài sản",
          "cost": "1.410.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý)",
          "service": "Chứng nhận biến động về quyền sử dụng đất",
          "cost": "950.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý)",
          "service": "Chứng nhận biến động về tài sản",
          "cost": "950.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý)",
          "service": "Chứng nhận biến động cả đất và tài sản",
          "cost": "1.200.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân",
          "service": "Cấp GCN quyền sử dụng đất",
          "cost": "810.000 đồng/GCN"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân",
          "service": "Cấp GCN về tài sản",
          "cost": "810.000 đồng/GCN"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân",
          "service": "Cấp GCN đối với cả đất và tài sản",
          "cost": "1.080.000 đồng/GCN"
        }
      ],
      "le_phi": "Lệ phí đăng ký và cấp giấy: 100.000 đồng/giấy.",
      "exemption": null
    },
    "legalBasis": "(1) Luật Đất đai số 31/2024/QH15 ngày 18/01/2024 được sửa đổi bổ sung một số điều bởi Luật số 43/2024/QH15, Luật số 47/2024/QH15 và Luật số 58/2024/QH15 của Quốc hội.\n(2) Nghị định số 101/2024/NĐ-CP ngày 29/7/2024 của Chính phủ quy định về điều tra cơ bản đất đai; đăng ký, cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất và Hệ thống thông tin đất đai.\n(3) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ quy định về việc thực hiện thủ tục hành chính theo cơ chế một cửa, một cửa liên thông tại Bộ phận Một cửa và Cổng Dịch vụ công quốc gia.\n(4) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ quy định về phân định thẩm quyền của chính quyền địa phương 02 cấp, phân quyền, phân cấp trong lĩnh vực đất đai.\n(5) Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(6) Nghị quyết 22/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(7) Quyết định 19/2021/QĐ-UBND ngày 10/6/2021 về Đơn giá đo đạc địa chính, đăng ký đất đai, tài sản gắn liền với đất, lập hồ sơ địa chính, cấp giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản khác gắn liền với đất, xây dựng cơ sở dữ liệu đất đai trên địa bàn tỉnh Bình Phước.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đề nghị tách thửa đất, hợp thửa đất theo Mẫu số 21 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Bản vẽ tách thửa đất, hợp thửa đất theo Mẫu số 22 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Bản gốc Giấy chứng nhận đã cấp."
    ]
  },
  {
    "id": "1.012786",
    "name": "Cấp lại Giấy chứng nhận do bị mất",
    "level": "Tỉnh",
    "status": "Sửa đổi",
    "processingTime": "Không quá 10 ngày làm việc",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường \n b) Nộp thông qua dịch vụ bưu chính\n c) Nộp trên Cổng Dịch vụ công quốc gia (Toàn trình)",
    "agency": "(1) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai\n(2) Ủy ban nhân dân cấp xã",
    "fees": {
      "description": "Đơn giá đăng ký và cấp Giấy chứng nhận. Ghi chú: Trường hợp tổ chức đề nghị cấp giấy chứng nhận đối với các dự án có nhiều thửa đất, giấy chứng nhận cấp từ thửa thứ hai thu 50.000 đồng/GCN/thửa đất. Trường hợp một thửa đất có nhiều hộ gia đình, cá nhân đồng sử dụng thì phải cấp cho mỗi người đồng sử dụng một giấy chứng nhận, mỗi giấy chứng nhận cấp thêm cho người đồng sử dụng thu 50.000 đồng/người đồng sử dụng.",
      "details": [
        {
          "type": "Hồ sơ tổ chức",
          "service": "Cấp GCN quyền sử dụng đất",
          "cost": "990.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ tổ chức",
          "service": "Cấp GCN về tài sản",
          "cost": "940.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ tổ chức",
          "service": "Cấp GCN đối với cả đất và tài sản",
          "cost": "1.250.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân",
          "service": "Cấp GCN quyền sử dụng đất",
          "cost": "810.000 đồng/GCN"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân",
          "service": "Cấp GCN về tài sản",
          "cost": "810.000 đồng/GCN"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân",
          "service": "Cấp GCN đối với cả đất và tài sản",
          "cost": "1.080.000 đồng/GCN"
        }
      ],
      "le_phi": "Lệ phí đăng ký và cấp giấy: 50.000 đồng/giấy.",
      "exemption": null
    },
    "legalBasis": "(1) Luật Đất đai số 31/2024/QH15 ngày 18/01/2024 được sửa đổi bổ sung một số điều bởi Luật số 43/2024/QH15, Luật số 47/2024/QH15 và Luật số 58/2024/QH15 của Quốc hội.\n(2) Nghị định số 101/2024/NĐ-CP ngày 29/7/2024 của Chính phủ quy định về điều tra cơ bản đất đai; đăng ký, cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất và Hệ thống thông tin đất đai.\n(3) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ quy định về việc thực hiện thủ tục hành chính theo cơ chế một cửa, một cửa liên thông tại Bộ phận Một cửa và Cổng Dịch vụ công quốc gia.\n(4) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ quy định về phân định thẩm quyền của chính quyền địa phương 02 cấp, phân quyền, phân cấp trong lĩnh vực đất đai.\n(5) Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(6) Nghị quyết 22/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(7) Quyết định 19/2021/QĐ-UBND ngày 10/6/2021 về Đơn giá đo đạc địa chính, đăng ký đất đai, tài sản gắn liền với đất, lập hồ sơ địa chính, cấp giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản khác gắn liền với đất, xây dựng cơ sở dữ liệu đất đai trên địa bàn tỉnh Bình Phước.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đăng ký biến động đất đai, tài sản gắn liền với đất theo Mẫu số 18 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Giấy xác nhận của Ủy ban nhân dân cấp xã về việc đã niêm yết thông báo mất Giấy chứng nhận tại trụ sở Ủy ban nhân dân cấp xã."
    ]
  },
  {
    "id": "1.012790",
    "name": "Đính chính Giấy chứng nhận đã cấp",
    "level": "Tỉnh",
    "status": "Sửa đổi",
    "processingTime": "Không quá 08 ngày làm việc",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường \n b) Nộp thông qua dịch vụ bưu chính\n c) Nộp trên Cổng Dịch vụ công quốc gia (Một phần)",
    "agency": "(1) Cơ quan có chức năng quản lý đất đai cấp tỉnh\n(2) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai",
    "fees": {
      "description": "Đơn giá đăng ký và cấp Giấy chứng nhận. Ghi chú: Trường hợp tổ chức đề nghị cấp giấy chứng nhận đối với các dự án có nhiều thửa đất, giấy chứng nhận cấp từ thửa thứ hai thu 50.000 đồng/GCN/thửa đất. Trường hợp một thửa đất có nhiều hộ gia đình, cá nhân đồng sử dụng thì phải cấp cho mỗi người đồng sử dụng một giấy chứng nhận, mỗi giấy chứng nhận cấp thêm cho người đồng sử dụng thu 50.000 đồng/người đồng sử dụng.",
      "details": [
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Cấp GCN quyền sử dụng đất",
          "cost": "1.170.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Cấp GCN về tài sản",
          "cost": "1.180.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Cấp GCN đối với cả đất và tài sản",
          "cost": "1.410.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Cấp GCN do thay đổi thông tin",
          "cost": "930.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý)",
          "service": "Chứng nhận biến động về quyền sử dụng đất",
          "cost": "950.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý)",
          "service": "Chứng nhận biến động về tài sản",
          "cost": "950.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý)",
          "service": "Chứng nhận biến động cả đất và tài sản",
          "cost": "1.200.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý)",
          "service": "Cấp GCN do thay đổi thông tin",
          "cost": "540.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ cá nhân (Cấp mới)",
          "service": "Cấp GCN quyền sử dụng đất",
          "cost": "530.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ cá nhân (Cấp mới)",
          "service": "Cấp GCN về tài sản",
          "cost": "580.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ cá nhân (Cấp mới)",
          "service": "Cấp GCN đối với cả đất và tài sản",
          "cost": "720.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ cá nhân (Cấp mới)",
          "service": "Cấp GCN do thay đổi thông tin",
          "cost": "310.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ cá nhân (Chỉnh lý)",
          "service": "Chứng nhận biến động về quyền sử dụng đất",
          "cost": "450.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ cá nhân (Chỉnh lý)",
          "service": "Chứng nhận biến động về tài sản",
          "cost": "470.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ cá nhân (Chỉnh lý)",
          "service": "Chứng nhận biến động cả đất và tài sản",
          "cost": "590.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ cá nhân (Chỉnh lý)",
          "service": "Cấp GCN do thay đổi thông tin",
          "cost": "190.000 đồng/hồ sơ/thửa/GCN"
        }
      ],
      "le_phi": "Lệ phí cấp Giấy chứng nhận: 25.000 đồng/giấy.",
      "exemption": "Trường hợp đính chính Giấy chứng nhận mà nguyên nhân do cơ quan nhà nước thì không thu tiền."
    },
    "legalBasis": "(1) Luật Đất đai số 31/2024/QH15 ngày 18/01/2024 được sửa đổi bổ sung một số điều bởi Luật số 43/2024/QH15, Luật số 47/2024/QH15 và Luật số 58/2024/QH15 của Quốc hội.\n(2) Nghị định số 101/2024/NĐ-CP ngày 29/7/2024 của Chính phủ quy định về điều tra cơ bản đất đai; đăng ký, cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất và Hệ thống thông tin đất đai.\n(3) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ quy định về việc thực hiện thủ tục hành chính theo cơ chế một cửa, một cửa liên thông tại Bộ phận Một cửa và Cổng Dịch vụ công quốc gia.\n(4) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ quy định về phân định thẩm quyền của chính quyền địa phương 02 cấp, phân quyền, phân cấp trong lĩnh vực đất đai.\n(5) Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(6) Nghị quyết 22/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(7) Quyết định 19/2021/QĐ-UBND ngày 10/6/2021 về Đơn giá đo đạc địa chính, đăng ký đất đai, tài sản gắn liền với đất, lập hồ sơ địa chính, cấp giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản khác gắn liền với đất, xây dựng cơ sở dữ liệu đất đai trên địa bàn tỉnh Bình Phước.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đăng ký biến động đất đai, tài sản gắn liền với đất theo Mẫu số 18 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Bản gốc Giấy chứng nhận đã cấp.",
      "Giấy tờ chứng minh sai sót thông tin so với thông tin tại thời điểm đề nghị đính chính."
    ]
  },
  {
    "id": "1.012791",
    "name": "Thu hồi Giấy chứng nhận đã cấp không đúng quy định của pháp luật đất đai do người sử dụng đất, chủ sở hữu tài sản gắn liền với đất phát hiện và cấp lại Giấy chứng nhận sau khi thu hồi",
    "level": "Tỉnh",
    "status": "Sửa đổi",
    "processingTime": "- Không quá 25 ngày làm việc đối với thu hồi Giấy chứng nhận đã cấp.\n- Trường hợp thu hồi Giấy chứng nhận đã cấp lần đầu thì thực hiện đăng ký, cấp lại Giấy chứng nhận không quá 20 ngày làm việc.\n- Trường hợp thu hồi Giấy chứng nhận đã cấp do đăng ký biến động thì thời gian thực hiện cấp lại Giấy chứng nhận theo quy định đối với từng trường hợp đăng ký biến động theo quy định tại Nghị định số 151/2025/NĐ-CP.",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường \n b) Nộp thông qua dịch vụ bưu chính\n c) Nộp trên Cổng Dịch vụ công quốc gia (Một phần)",
    "agency": "(1) Cơ quan có chức năng quản lý đất đai cấp tỉnh\n(2) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai\n(3) Cơ quan thuế",
    "fees": {
      "description": "Đối với trường hợp do lỗi của người sử dụng đất: Thu phí, lệ phí, đơn giá theo thủ tục cấp lại Giấy chứng nhận sau khi thu hồi (thủ tục đã cấp Giấy chứng nhận trước đó).",
      "details": [],
      "le_phi": "Đối với trường hợp do lỗi của người sử dụng đất: Thu Lệ phí theo thủ tục cấp lại Giấy chứng nhận sau khi thu hồi (thủ tục đã cấp Giấy chứng nhận trước đó).",
      "exemption": "Đối với trường hợp do lỗi của cơ quan có thẩm quyền cấp Giấy chứng nhận: Không thu phí, lệ phí."
    },
    "legalBasis": "(1) Luật Đất đai số 31/2024/QH15 ngày 18/01/2024 được sửa đổi bổ sung một số điều bởi Luật số 43/2024/QH15, Luật số 47/2024/QH15 và Luật số 58/2024/QH15 của Quốc hội.\n(2) Nghị định số 101/2024/NĐ-CP ngày 29/7/2024 của Chính phủ quy định về điều tra cơ bản đất đai; đăng ký, cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất và Hệ thống thông tin đất đai.\n(3) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ quy định về việc thực hiện thủ tục hành chính theo cơ chế một cửa, một cửa liên thông tại Bộ phận Một cửa và Cổng Dịch vụ công quốc gia.\n(4) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ quy định về phân định thẩm quyền của chính quyền địa phương 02 cấp, phân quyền, phân cấp trong lĩnh vực đất đai.\n(5) Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(6) Nghị quyết 22/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(7) Quyết định 19/2021/QĐ-UBND ngày 10/6/2021 về Đơn giá đo đạc địa chính, đăng ký đất đai, tài sản gắn liền với đất, lập hồ sơ địa chính, cấp giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản khác gắn liền với đất, xây dựng cơ sở dữ liệu đất đai trên địa bàn tỉnh Bình Phước.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Văn bản kiến nghị về việc Giấy chứng nhận đã cấp không đúng quy định của pháp luật.",
      "Bản gốc Giấy chứng nhận đã cấp."
    ]
  },
     {
    "id": "1.012785",
    "name": "Đăng ký, cấp Giấy chứng nhận đối với trường hợp đã chuyển quyền sử dụng đất trước ngày 01 tháng 8 năm 2024 mà bên chuyển quyền đã được cấp Giấy chứng nhưng chưa thực hiện thủ tục chuyển quyền theo quy định",
    "level": "Tỉnh",
    "status": "Sửa đổi",
    "processingTime": "Không quá 08 ngày làm việc",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường \n b) Nộp thông qua dịch vụ bưu chính\n c) Nộp trên Cổng Dịch vụ công quốc gia",
    "agency": "(1) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai\n(2) Ủy ban nhân dân cấp xã\n(3) Cơ quan thuế",
    "fees": {
      "description": "Đơn giá đăng ký và Cấp giấy chứng nhận.",
      "details": [
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Đối với đất",
          "cost": "1.622.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Đối với tài sản",
          "cost": "1.591.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Đối với cả đất và tài sản",
          "cost": "2.082.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý)",
          "service": "Đối với đất",
          "cost": "1.403.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý)",
          "service": "Đối với tài sản",
          "cost": "1.397.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý)",
          "service": "Đối với cả đất và tài sản",
          "cost": "1.803.000 đồng/giấy"
        }
      ],
      "le_phi": "- Cấp mới giấy chứng nhận: 100.000 đồng/giấy.\n- Chỉnh lý Giấy chứng nhận đã cấp: 25.000 đồng/giấy.",
      "exemption": null
    },
    "legalBasis": "(1) Luật Đất đai số 31/2024/QH15 ngày 18/01/2024 được sửa đổi bổ sung một số điều bởi Luật số 43/2024/QH15, Luật số 47/2024/QH15 và Luật số 58/2024/QH15 của Quốc hội.\n(2) Nghị định số 101/2024/NĐ-CP ngày 29/7/2024 của Chính phủ quy định về điều tra cơ bản đất đai; đăng ký, cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất và Hệ thống thông tin đất đai.\n(3) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ quy định về việc thực hiện thủ tục hành chính theo cơ chế một cửa, một cửa liên thông tại Bộ phận Một cửa và Cổng Dịch vụ công quốc gia.\n(4) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ quy định về phân định thẩm quyền của chính quyền địa phương 02 cấp, phân quyền, phân cấp trong lĩnh vực đất đai.\n(5) Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(6) Nghị quyết 22/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(7) Quyết định 19/2021/QĐ-UBND ngày 10/6/2021 về Đơn giá đo đạc địa chính, đăng ký đất đai, tài sản gắn liền với đất, lập hồ sơ địa chính, cấp giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản khác gắn liền với đất, xây dựng cơ sở dữ liệu đất đai trên địa bàn tỉnh Bình Phước.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đăng ký biến động đất đai, tài sản gắn liền với đất theo Mẫu số 18 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Bản gốc Giấy chứng nhận của bên chuyển quyền.",
      "Hợp đồng hoặc văn bản về việc chuyển quyền sử dụng đất có đủ chữ ký của các bên.",
      "Chứng từ thực hiện nghĩa vụ tài chính; giấy tờ liên quan đến việc miễn, giảm nghĩa vụ tài chính về đất đai, tài sản gắn liền với đất (nếu có)."
    ]
  },
  {
    "id": "1.012787",
    "name": "Đăng ký, cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất cho người nhận chuyển nhượng quyền sử dụng đất, quyền sở hữu nhà ở, công trình xây dựng trong dự án bất động sản",
    "level": "Tỉnh",
    "status": "Sửa đổi",
    "processingTime": "Không quá 08 ngày làm việc",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường \n b) Nộp thông qua dịch vụ bưu chính\n c) Nộp trên Cổng Dịch vụ công quốc gia",
    "agency": "(1) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai\n(2) Cơ quan Thuế (nếu có)",
    "fees": {
      "description": "Đơn giá đăng ký và cấp Giấy chứng nhận.",
      "details": [
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Đối với đất",
          "cost": "1.622.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Đối với tài sản",
          "cost": "1.591.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Đối với cả đất và tài sản",
          "cost": "2.082.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý)",
          "service": "Đối với đất",
          "cost": "1.403.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý)",
          "service": "Đối với tài sản",
          "cost": "1.397.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý)",
          "service": "Đối với cả đất và tài sản",
          "cost": "1.803.000 đồng/giấy"
        }
      ],
      "le_phi": "- Cấp mới giấy chứng nhận: 100.000 đồng/giấy.\n- Chỉnh lý Giấy chứng nhận đã cấp: 25.000 đồng/giấy.",
      "exemption": null
    },
    "legalBasis": "(1) Luật Đất đai số 31/2024/QH15 ngày 18/01/2024 được sửa đổi bổ sung một số điều bởi Luật số 43/2024/QH15, Luật số 47/2024/QH15 và Luật số 58/2024/QH15 của Quốc hội.\n(2) Nghị định số 101/2024/NĐ-CP ngày 29/7/2024 của Chính phủ quy định về điều tra cơ bản đất đai; đăng ký, cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất và Hệ thống thông tin đất đai.\n(3) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ quy định về việc thực hiện thủ tục hành chính theo cơ chế một cửa, một cửa liên thông tại Bộ phận Một cửa và Cổng Dịch vụ công quốc gia.\n(4) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ quy định về phân định thẩm quyền của chính quyền địa phương 02 cấp, phân quyền, phân cấp trong lĩnh vực đất đai.\n(5) Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(6) Nghị quyết 22/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(7) Quyết định 19/2021/QĐ-UBND ngày 10/6/2021 về Đơn giá đo đạc địa chính, đăng ký đất đai, tài sản gắn liền với đất, lập hồ sơ địa chính, cấp giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản khác gắn liền với đất, xây dựng cơ sở dữ liệu đất đai trên địa bàn tỉnh Bình Phước.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đăng ký biến động đất đai, tài sản gắn liền với đất theo Mẫu số 18 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Hợp đồng chuyển nhượng quyền sử dụng đất, mua bán nhà ở, công trình xây dựng theo quy định của pháp luật.",
      "Biên bản bàn giao nhà, đất, công trình xây dựng.",
      "Bản gốc Giấy chứng nhận đã cấp cho chủ đầu tư dự án.",
      "Chứng từ thực hiện nghĩa vụ tài chính; giấy tờ liên quan đến việc miễn, giảm nghĩa vụ tài chính về đất đai, tài sản gắn liền với đất (nếu có)."
    ]
  },
  {
    "id": "1.012789",
    "name": "Cung cấp thông tin, dữ liệu đất đai",
    "level": "Tỉnh",
    "status": "Sửa đổi",
    "processingTime": "- Trong ngày làm việc đối với thông tin, dữ liệu có sẵn trong cơ sở dữ liệu quốc gia về đất đai thì cung cấp ngay. Trường hợp nhận được yêu cầu sau 15 giờ thì cung cấp vào ngày làm việc tiếp theo.\n- Không quá 10 ngày làm việc đối với thông tin, dữ liệu không có sẵn trong cơ sở dữ liệu quốc gia về đất đai.\n- Trường hợp cơ quan cung cấp thông tin, dữ liệu đất đai và tổ chức, cá nhân có thỏa thuận riêng về việc khai thác và sử dụng thông tin, dữ liệu đất đai thì thời gian cung cấp thông tin, dữ liệu đất đai được xác định theo thỏa thuận.",
    "location": "a) Nộp trên Cổng thông tin đất đai quốc gia, Cổng Dịch vụ công quốc gia\nb) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường hoặc gửi qua đường công văn, điện tín, qua dịch vụ bưu chính\nc) Nộp thông qua các phương tiện điện tử khác theo quy định của pháp luật (Toàn trình)",
    "agency": "(1) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai\n(2) UBND cấp xã",
    "fees": {
      "description": "- Đối với trường hợp khai thác và sử dụng tài liệu đất đai từ hệ thống thông tin Quốc gia về đất đai: Thu theo quy định tại thông tư số 56/2024/TT-BTC ngày 31/7/2024 của Bộ Tài chính.\n- Đối với trường hợp còn lại: 300.000 đồng/hồ sơ, tài liệu (không bao gồm chi phí in ấn, sao chụp hồ sơ, tài liệu).\n* Ghi chú: Trường hợp trích lục thửa đất thì thu theo đơn giá trích lục.",
      "details": [],
      "le_phi": "30.000 đồng.",
      "exemption": null
    },
    "legalBasis": "(1) Luật Đất đai số 31/2024/QH15 ngày 18/01/2024 được sửa đổi bổ sung một số điều bởi Luật số 43/2024/QH15, Luật số 47/2024/QH15 và Luật số 58/2024/QH15 của Quốc hội.\n(2) Nghị định số 101/2024/NĐ-CP ngày 29/7/2024 của Chính phủ quy định về điều tra cơ bản đất đai; đăng ký, cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất và Hệ thống thông tin đất đai.\n(3) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ quy định về việc thực hiện thủ tục hành chính theo cơ chế một cửa, một cửa liên thông tại Bộ phận Một cửa và Cổng Dịch vụ công quốc gia.\n(4) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ quy định về phân định thẩm quyền của chính quyền địa phương 02 cấp, phân quyền, phân cấp trong lĩnh vực đất đai.\n(5) Nghị quyết 13/2015/NQ-HĐND ngày 14/12/2015 thông qua quy định mức thu, quản lý, sử dụng phí và lệ phí trên địa bàn tỉnh Bình Phước.\n(6) Thông tư số 56/2024/TT-BTC ngày 31/07/2024 của Bộ Tài chính.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Phiếu yêu cầu cung cấp thông tin, dữ liệu đất đai theo Mẫu số 14 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Văn bản, giấy tờ chứng minh là cơ quan, tổ chức, cá nhân được miễn, giảm phí, lệ phí (nếu có)."
    ]
  },
  {
    "id": "1.012821",
    "name": "Thẩm định, phê duyệt phương án sử dụng đất",
    "level": "Tỉnh",
    "status": "Sửa đổi",
    "processingTime": "- Bước 2: không quá 05 ngày làm việc.\n- Bước 3: không quá 10 ngày.\n- Bước 4: Thời gian tổ chức họp Hội đồng để thẩm định không quá 05 ngày làm việc; Thời gian trình phê duyệt không quá 05 ngày làm việc.\n- Thời gian thông báo cho công ty nông, lâm nghiệp để hoàn thiện hồ sơ không quá 03 ngày làm việc.\n- Bước 5: không quá 05 ngày làm việc.\n- Đối với các xã miền núi, biên giới; đảo, vùng có điều kiện kinh tế - xã hội khó khăn, vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn thì thời gian thực hiện được tăng thêm không quá 10 ngày so với tổng thời gian thực hiện thủ tục này.",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh hoặc qua dịch vụ bưu chính\nb) Nộp trực tuyến: qua Cổng Dịch vụ công quốc gia (Một phần)",
    "agency": "Chủ tịch ủy ban nhân dân cấp tỉnh\nCơ quan có chức năng quản lý đất đai cấp tỉnh",
    "fees": {
      "description": "Phí thẩm định: 4.000.000 đồng (đối với hồ sơ xin cấp quyền sử dụng đất để sản xuất, kinh doanh) và 300.000 đồng (đối với hồ sơ xin cấp quyền sử dụng đất để làm nhà ở).",
      "details": [],
      "le_phi": "Không quy định",
      "exemption": null
    },
    "legalBasis": "(1) Luật Đất đai số 31/2024/QH15 ngày 18/01/2024 được sửa đổi bổ sung một số điều bởi Luật số 43/2024/QH15, Luật số 47/2024/QH15 và Luật số 58/2024/QH15 của Quốc hội.\n(2) Nghị định số 102/2024/NĐ-CP ngày 29/7/2024 của Chính phủ.\n(3) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ quy định về việc thực hiện thủ tục hành chính theo cơ chế một cửa, một cửa liên thông tại Bộ phận Một cửa và Cổng Dịch vụ công quốc gia.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Văn bản đề nghị thẩm định, phê duyệt phương án sử dụng đất theo Mẫu số 23 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Phương án sử dụng đất.",
      "Bản đồ địa chính có thể hiện ranh giới sử dụng đất hoặc hồ sơ ranh giới sử dụng đất của công ty nông, lâm nghiệp."
    ]
  },
  {
    "id": "1.012805",
    "name": "Giải quyết tranh chấp đất đai thuộc thẩm quyền của Chủ tịch Ủy ban nhân dân cấp tỉnh",
    "level": "Tỉnh",
    "status": "Sửa đổi",
    "processingTime": "- Không quá 50 ngày kể từ ngày thụ lý đơn yêu cầu giải quyết tranh chấp đất đai.\n- Đối với các xã miền núi, biên giới đảo, vùng có điều kiện kinh tế - xã hội khó khăn, vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn không quá 60 ngày.",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh hoặc qua dịch vụ bưu chính\nb) Nộp trực tuyến: qua Cổng Dịch vụ công quốc gia (Một phần)",
    "agency": "Chủ tịch ủy ban nhân dân cấp tỉnh\nCác sở ngành có liên quan",
    "fees": {
      "description": null,
      "details": [],
      "le_phi": "Theo quy định của Luật phí và lệ phí và các văn bản quy phạm pháp luật hướng dẫn Luật phí và lệ phí.",
      "exemption": null
    },
    "legalBasis": "(1) Luật Đất đai số 31/2024/QH15 ngày 18/01/2024 được sửa đổi bổ sung một số điều bởi Luật số 43/2024/QH15, Luật số 47/2024/QH15 và Luật số 58/2024/QH15 của Quốc hội.\n(2) Nghị định số 102/2024/NĐ-CP ngày 29/7/2024 của Chính phủ.\n(3) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ quy định về việc thực hiện thủ tục hành chính theo cơ chế một cửa, một cửa liên thông tại Bộ phận Một cửa và Cổng Dịch vụ công quốc gia.\n(4) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ quy định về phân định thẩm quyền của chính quyền địa phương 02 cấp, phân quyền, phân cấp trong lĩnh vực đất đai.\n(5) Nghị quyết 13/2015/NQ-HĐND ngày 14/12/2015 thông qua quy định mức thu, quản lý, sử dụng phí và lệ phí trên địa bàn tỉnh Bình Phước.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn yêu cầu giải quyết tranh chấp đất đai.",
      "Biên bản hòa giải tại Ủy ban nhân dân cấp xã.",
      "Các giấy tờ, tài liệu chứng minh về nguồn gốc, quá trình sử dụng đất và các tài liệu liên quan khác."
    ]
  },
      {
    "id": "1.012817",
    "name": "Xác định lại diện tích đất ở của hộ gia đình, cá nhân đã được cấp Giấy chứng nhận trước ngày 01 tháng 7 năm 2004",
    "level": "Xã",
    "status": "Sửa đổi",
    "processingTime": "- 20 ngày làm việc.\n- Đối với các xã miền núi, hải đảo, vùng sâu, vùng xa, vùng có điều kiện kinh tế - xã hội khó khăn, vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn thì thời gian thực hiện 30 ngày làm việc.",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công phường, xã\nb) Nộp thông qua dịch vụ bưu chính công ích\nc) Nộp trên công dịch vụ công quốc gia (Một phần)",
    "agency": "(1) Ủy ban nhân dân cấp xã\n(2) Chủ tịch Ủy ban nhân dân cấp xã\n(3) Chi nhánh Văn phòng đăng ký đất đai\n(4) Cơ quan thuế (nếu có)",
    "fees": {
      "description": "Đơn giá đăng ký và Cấp giấy chứng nhận.",
      "details": [
        {
          "type": "Hồ sơ cá nhân (Cấp mới)",
          "service": "Đối với đất",
          "cost": "923.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ cá nhân (Cấp mới)",
          "service": "Đối với tài sản",
          "cost": "1.062.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ cá nhân (Cấp mới)",
          "service": "Đối với cả đất và tài sản",
          "cost": "1.351.000 đồng/giấy"
        }
      ],
      "le_phi": "- Đối với đất: 25.000 đồng.\n- Đối với cả đất và tài sản: 100.000 đồng.",
      "exemption": null
    },
    "legalBasis": "(1) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ quy định về phân định thẩm quyền của chính quyền địa phương 02 cấp, phân quyền, phân cấp trong lĩnh vực đất đai.\n(2) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ quy định về việc thực hiện thủ tục hành chính theo cơ chế một cửa, một cửa liên thông tại Bộ phận Một cửa và Cổng Dịch vụ công quốc gia.\n(3) Quyết định 19/2021/QĐ-UBND ngày 10/6/2021 về Đơn giá đo đạc địa chính, đăng ký đất đai, tài sản gắn liền với đất, lập hồ sơ địa chính, cấp giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản khác gắn liền với đất, xây dựng cơ sở dữ liệu đất đai trên địa bàn tỉnh Bình Phước.\n(4) Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(5) Nghị quyết 22/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đăng ký biến động đất đai, tài sản gắn liền với đất theo Mẫu số 18 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Bản gốc Giấy chứng nhận đã cấp."
    ]
  },
  {
    "id": "1.012796",
    "name": "Đính chính Giấy chứng nhận đã cấp lần đầu có sai sót",
    "level": "Xã",
    "status": "Sửa đổi",
    "processingTime": "Không quá 08 ngày làm việc",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, phường, xã\nb) Nộp thông qua dịch vụ bưu chính công ích\nc) Nộp trên cổng dịch vụ công quốc gia",
    "agency": "(1) Ủy ban nhân dân cấp xã",
    "fees": {
      "description": "Đơn giá đăng ký và cấp Giấy chứng nhận. Trường hợp đính chính Giấy chứng nhận mà nguyên nhân do cơ quan nhà nước thì không thu tiền.",
      "details": [
        {
          "type": "Hồ sơ cá nhân (Cấp mới)",
          "service": "Đối với đất",
          "cost": "923.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ cá nhân (Cấp mới)",
          "service": "Đối với tài sản",
          "cost": "1.062.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ cá nhân (Cấp mới)",
          "service": "Đối với cả đất và tài sản",
          "cost": "1.351.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ cá nhân (Chỉnh lý)",
          "service": "Đối với đất",
          "cost": "569.000 đồng"
        },
        {
          "type": "Hồ sơ cá nhân (Chỉnh lý)",
          "service": "Đối với tài sản",
          "cost": "705.000 đồng"
        },
        {
          "type": "Hồ sơ cá nhân (Chỉnh lý)",
          "service": "Đối với đất và tài sản",
          "cost": "858.000 đồng"
        }
      ],
      "le_phi": "Lệ phí cấp Giấy chứng nhận: 25.000 đồng.",
      "exemption": "Trường hợp đính chính Giấy chứng nhận mà nguyên nhân do cơ quan nhà nước thì không thu tiền."
    },
    "legalBasis": "(1) Luật Đất đai số 31/2024/QH15 ngày 18/01/2024 được sửa đổi bổ sung một số điều bởi Luật số 43/2024/QH15, Luật số 47/2024/QH15 và Luật số 58/2024/QH15 của Quốc hội.\n(2) Nghị định số 101/2024/NĐ-CP ngày 29/7/2024 của Chính phủ quy định về điều tra cơ bản đất đai; đăng ký, cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất và Hệ thống thông tin đất đai.\n(3) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ quy định về việc thực hiện thủ tục hành chính theo cơ chế một cửa, một cửa liên thông tại Bộ phận Một cửa và Cổng Dịch vụ công quốc gia.\n(4) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ quy định về phân định thẩm quyền của chính quyền địa phương 02 cấp, phân quyền, phân cấp trong lĩnh vực đất đai.\n(5) Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(6) Nghị quyết 22/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đăng ký biến động đất đai, tài sản gắn liền với đất theo Mẫu số 18 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Bản gốc Giấy chứng nhận đã cấp có sai sót.",
      "Giấy tờ chứng minh sai sót thông tin so với thông tin tại thời điểm đề nghị đính chính."
    ]
  },
  {
    "id": "1.012818",
    "name": "Thu hồi Giấy chứng nhận đã cấp lần đầu không đúng quy định của pháp luật đất đai do người sử dụng đất, chủ sở hữu tài sản gắn liền với đất phát hiện và cấp lại Giấy chứng nhận sau khi thu hồi",
    "level": "Xã",
    "status": "Sửa đổi",
    "processingTime": "- Không quá 25 ngày làm việc đối với trường hợp thu hồi Giấy chứng nhận đã cấp.\n- Không quá 20 ngày làm việc đối với trường hợp đăng ký, cấp lại Giấy chứng nhận sau thu hồi.",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công phường, xã\nb) Nộp thông qua dịch vụ bưu chính công ích\nc) Nộp trên cổng dịch vụ công quốc gia",
    "agency": "(1) Ủy ban nhân dân cấp xã\n(2) Cơ quan có chức năng quản lý đất đai cấp xã\n(3) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai",
    "fees": {
      "description": "Đối với trường hợp do lỗi của người sử dụng đất: đơn giá theo thủ tục cấp lại Giấy chứng nhận sau khi thu hồi (thủ tục đã cấp Giấy chứng nhận trước đó).",
      "details": [],
      "le_phi": "Đối với trường hợp do lỗi của người sử dụng đất: Thu Lệ phí theo thủ tục cấp lại Giấy chứng nhận sau khi thu hồi (thủ tục đã cấp Giấy chứng nhận trước đó).",
      "exemption": "Đối với trường hợp do lỗi của cơ quan có thẩm quyền cấp Giấy chứng nhận: Không thu."
    },
    "legalBasis": "(1) Luật Đất đai số 31/2024/QH15 ngày 18/01/2024 được sửa đổi bổ sung một số điều bởi Luật số 43/2024/QH15, Luật số 47/2024/QH15 và Luật số 58/2024/QH15 của Quốc hội.\n(2) Nghị định số 101/2024/NĐ-CP ngày 29/7/2024 của Chính phủ quy định về điều tra cơ bản đất đai; đăng ký, cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất và Hệ thống thông tin đất đai.\n(3) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ quy định về việc thực hiện thủ tục hành chính theo cơ chế một cửa, một cửa liên thông tại Bộ phận Một cửa và Cổng Dịch vụ công quốc gia.\n(4) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ quy định về phân định thẩm quyền của chính quyền địa phương 02 cấp, phân quyền, phân cấp trong lĩnh vực đất đai.\n(5) Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(6) Nghị quyết 22/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đề nghị thu hồi Giấy chứng nhận đã cấp.",
      "Bản gốc Giấy chứng nhận đã cấp không đúng quy định."
    ]
  },
  {
    "id": "1.012753",
    "name": "Đăng ký đất đai, tài sản gắn liền với đất, cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất lần đầu đối với tổ chức đang sử dụng đất",
    "level": "Xã",
    "status": "Sửa đổi",
    "processingTime": "- 17 ngày làm việc đối với trường hợp đăng ký đất đai, tài sản gắn liền với đất lần đầu; 20 ngày làm việc đối với trường hợp đăng ký đất đai, tài sản gắn liền với đất, cấp Giấy chứng nhận lần đầu.\n- Đối với các xã miền núi, hải đảo, vùng sâu, vùng xa, vùng có điều kiện kinh tế - xã hội khó khăn, vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn thì thời gian thực hiện 27 ngày làm việc đối với trường hợp đăng ký đất đai, tài sản gắn liền với đất lần đầu; 30 ngày làm việc đối với trường hợp đăng ký đất đai, tài sản gắn liền với đất, cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất lần đầu.",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, phường, xã\nb) Nộp thông qua dịch vụ bưu chính công ích\nc) Nộp trên cổng dịch vụ công quốc gia (Một phần)",
    "agency": "(1) Cơ quan có chức năng quản lý đất đai cấp tỉnh\n(2) Ủy ban nhân dân cấp xã\n(3) Chủ tịch Ủy ban nhân dân cấp xã\n(4) Văn phòng đăng ký đất đai hoặc Chi nhánh Văn phòng đăng ký đất đai\n(5) Cơ quan thuế (nếu có)",
    "fees": {
      "description": "Đơn giá đăng ký và cấp Giấy chứng nhận.",
      "details": [],
      "le_phi": "Lệ phí cấp Giấy chứng nhận: 25.000 đồng/giấy.",
      "exemption": null
    },
    "legalBasis": "(1) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ quy định về phân định thẩm quyền của chính quyền địa phương 02 cấp, phân quyền, phân cấp trong lĩnh vực đất đai.\n(2) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ quy định về việc thực hiện thủ tục hành chính theo cơ chế một cửa, một cửa liên thông tại Bộ phận Một cửa và Cổng Dịch vụ công quốc gia.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đăng ký đất đai, tài sản gắn liền với đất theo Mẫu số 15 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Báo cáo kết quả rà soát hiện trạng sử dụng đất của tổ chức theo Mẫu số 15d ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Một trong các loại giấy tờ về quyền sử dụng đất quy định tại Điều 137 của Luật Đất đai.",
      "Chứng từ thực hiện nghĩa vụ tài chính; giấy tờ liên quan đến việc miễn, giảm nghĩa vụ tài chính về đất đai, tài sản gắn liền với đất (nếu có)."
    ]
  },
  {
    "id": "1.013823",
    "name": "Giao đất, cho thuê đất, chuyển mục đích sử dụng đất đối với trường hợp giao đất, cho thuê đất không đấu giá quyền sử dụng đất, không đấu thầu lựa chọn nhà đầu tư thực hiện dự án có sử dụng đất, trường hợp giao đất, cho thuê đất thông qua đấu thầu lựa chọn nhà đầu tư thực hiện dự án có sử dụng đất giao đất và giao rừng, cho thuê đất và cho thuê rừng gia hạn sử dụng đất khi hết thời hạn sử dụng đất",
    "level": "Tỉnh",
    "status": "Mới",
    "processingTime": "15 ngày kể từ ngày nhận đủ hồ sơ hợp lệ. Đối với các xã miền núi, biên giới, đảo vùng có điều kiện kinh tế - xã hội khó khăn, vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn thì thời gian thực hiện 25 ngày.",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh\nb) Nộp thông qua dịch vụ bưu chính công ích\nc) Nộp trực tuyến (Một phần)",
    "agency": "(1) UBND cấp tỉnh\n(2) Chủ tịch UBND cấp tỉnh\n(3) Cơ quan chuyên môn về nông nghiệp và môi trường cấp tỉnh\n(4) Văn phòng đăng ký đất đai hoặc Chi nhánh Văn phòng đăng ký đất đai\n(5) Cơ quan thuế (nếu có)",
    "fees": {
      "description": "Phí thẩm định giao đất, cho thuê đất: 4.000.000 đồng (đối với hồ sơ xin cấp quyền sử dụng đất để sản xuất, kinh doanh) và 300.000 đồng (đối với hồ sơ xin cấp quyền sử dụng đất để làm nhà ở). Ghi chú: Trường hợp nhiều thửa đất lập chung trong 1 hồ sơ và cấp chung 1 GCN hoặc 1 hồ sơ mà nhiều GCN thì đơn giá đối với mỗi thửa đất (GCN) tăng thêm là: 566.000 đồng/giấy.",
      "details": [
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Cấp GCN đối với đất",
          "cost": "1.887.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Cấp GCN đối với tài sản",
          "cost": "2.024.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Cấp GCN đối với đất và tài sản",
          "cost": "2.717.000 đồng/giấy"
        }
      ],
      "le_phi": "- Đối với đất: 100.000 đồng/lần.\n- Đối với đất và tài sản: 500.000 đồng/lần.",
      "exemption": null
    },
    "legalBasis": "(1) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ.\n(2) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ.\n(3) Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(4) Nghị quyết 22/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(5) Nghị quyết 13/2015/NQ-HĐND ngày 14/12/2015 của HĐND tỉnh Bình Phước.\n(6) Nghị quyết số 10/2019/NQ-HĐND ngày 05/7/2019 của HĐND tỉnh.\n(7) Quyết định 19/2021/QĐ-UBND ngày 10/6/2021 của UBND tỉnh Bình Phước.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đề nghị giao đất/thuê đất/chuyển mục đích sử dụng đất theo Mẫu số 01 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Bản sao giấy chứng nhận đầu tư hoặc văn bản chấp thuận đầu tư.",
      "Văn bản thẩm định nhu cầu sử dụng đất; thẩm định điều kiện giao đất, cho thuê đất, cho phép chuyển mục đích sử dụng đất.",
      "Trích lục bản đồ địa chính thửa đất hoặc trích đo địa chính thửa đất."
    ]
  },
      {
        "id": "1.012812",
        "name": "Hòa giải tranh chấp đất đai thuộc thẩm quyền cấp xã*****",
        "level": "Xã",
        "status": "Giữ nguyên",
        "processingTime": "Không quá 30 ngày kể từ ngày nhận được đơn yêu cầu hòa giải tranh chấp đất đai.",
        "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công hoặc Ủy ban nhân dân cấp xã.\nb) Nộp thông qua dịch vụ bưu chính công ích.\nc) Nộp trực tuyến trên Cổng dịch vụ công (Một phần)",
        "agency": "UBND cấp xã",
        "fees": { "description": null, "details": [], "le_phi": "Không quy định", "exemption": null },
        "legalBasis": "(1) Luật Đất đai số 31/2024/QH15 ngày 18/01/2024.\n(2) Luật số 43/2024/QH15 ngày 29/6/2024 sửa đổi, bổ sung một số điều của Luật Đất đai số 31/2024/QH15, Luật Nhà ở số 27/2023/QH15, Luật Kinh doanh bất động sản số 29/2023/QH15 và Luật Các tổ chức tín dụng số 32/2024/QH15.\n(3) Nghị định số 102/2024/NĐ-CP ngày 30/7/2024 của Chính phủ quy định chi tiết thi hành một số điều của Luật Đất đai.\n(4) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ quy định về việc thực hiện thủ tục hành chính theo cơ chế một cửa, một cửa liên thông tại Bộ phận Một cửa và Cổng Dịch vụ công quốc gia.",
        "notes": null,
        "requiredDocs": [
            "Đơn yêu cầu hòa giải tranh chấp đất đai."
        ]
      },
        {
    "id": "1.013825",
    "name": "Chuyển hình thức giao đất, cho thuê đất",
    "level": "Tỉnh",
    "status": "Mới",
    "processingTime": "15 ngày kể từ ngày nhận đủ hồ sơ hợp lệ. Đối với các xã miền núi, biên giới, đảo vùng có điều kiện kinh tế - xã hội khó khăn, vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn thì thời gian thực hiện 25 ngày.",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh\nb) Nộp thông qua dịch vụ bưu chính công ích\nc) Nộp trực tuyến (Một phần)",
    "agency": "Chủ tịch ủy ban nhân dân cấp tỉnh\nCơ quan có chức năng quản lý đất đai cấp tỉnh",
    "fees": {
      "description": "Phí thẩm định giao đất, cho thuê đất và Đơn giá đăng ký và cấp Giấy chứng nhận. Ghi chú: Trường hợp nhiều thửa đất lập chung trong 1 hồ sơ và cấp chung 1 GCN hoặc 1 hồ sơ mà nhiều GCN thì đơn giá đối với mỗi thửa đất (GCN) tăng thêm là: 566.000 đồng/giấy.",
      "details": [
        {
          "type": "Phí thẩm định",
          "service": "Hồ sơ xin cấp quyền sử dụng đất để sản xuất, kinh doanh",
          "cost": "4.000.000 đồng"
        },
        {
          "type": "Phí thẩm định",
          "service": "Hồ sơ xin cấp quyền sử dụng đất để làm nhà ở",
          "cost": "300.000 đồng"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp GCN)",
          "service": "Đối với đất",
          "cost": "1.887.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp GCN)",
          "service": "Đối với cả đất và tài sản",
          "cost": "2.717.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp GCN)",
          "service": "Đối với đất",
          "cost": "923.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp GCN)",
          "service": "Đối với tài sản",
          "cost": "1.062.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp GCN)",
          "service": "Đối với đất và tài sản",
          "cost": "1.351.000 đồng/giấy"
        }
      ],
      "le_phi": "* Đối với tổ chức: 100.000 đồng/giấy (đất) hoặc 500.000 đồng/giấy (đất và tài sản).\n* Đối với hộ gia đình, cá nhân: 25.000 đồng/giấy.",
      "exemption": null
    },
    "legalBasis": "Luật Lâm nghiệp số 16/2017/QH14\nLuật Đất đai số 31/2024/QH15\nNghị định số 156/2018/NĐ-CP\nNghị định số 102/2024/NĐ-CP\nNghị định số 118/2025/NĐ-CP\nNghị định số 131/NĐ-CP\nNghị định số 136/NĐ-CP\nNghị định số 151/2025/NĐ-CP\nNghị quyết 21/2024/NQ-HĐND\nNghị quyết 22/2024/NQ-HĐND\nNghị quyết số 10/2019/NQ-HĐND\nQuyết định 19/2021/QĐ-UBND",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đề nghị chuyển hình thức giao đất/cho thuê đất theo Mẫu số 02 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Bản gốc Giấy chứng nhận đã cấp.",
      "Chứng từ thực hiện nghĩa vụ tài chính; giấy tờ liên quan đến việc miễn, giảm nghĩa vụ tài chính về đất đai, tài sản gắn liền với đất (nếu có)."
    ]
  },
  {
    "id": "1.013826",
    "name": "Điều chỉnh quyết định giao đất, cho thuê đất, cho phép chuyển mục đích sử dụng đất do thay đổi căn cứ quyết định giao đất, cho thuê đất, cho phép chuyển mục đích sử dụng đất, điều chỉnh thời hạn sử dụng đất của dự án đầu tư",
    "level": "Tỉnh",
    "status": "Mới",
    "processingTime": "- Trường hợp đề nghị điều chỉnh quyết định giao đất, cho thuê đất, cho phép chuyển mục đích sử dụng đất: 05 ngày kể từ ngày nhận đủ hồ sơ hợp lệ, đối với các xã miền núi, biên giới, đảo, vùng có điều kiện kinh tế - xã hội khó khăn, vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn thì thời gian thực hiện 15 ngày.\n- Trường hợp đề nghị điều chỉnh thời hạn sử dụng đất của dự án đầu tư: 15 ngày kể từ ngày nhận đủ hồ sơ hợp lệ, đối với các xã miền núi, biên giới, đảo, vùng có điều kiện kinh tế - xã hội khó khăn, vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn thì thời gian thực hiện 25 ngày.",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh\nb) Nộp thông qua dịch vụ bưu chính công ích\nc) Nộp trực tuyến (Một phần)",
    "agency": "(1) UBND cấp tỉnh\n(2) Chủ tịch UBND cấp tỉnh\n(3) Cơ quan chuyên môn về nông nghiệp và môi trường cấp tỉnh\n(4) Văn phòng đăng ký đất đai hoặc Chi nhánh Văn phòng đăng ký đất đai\n(5) Cơ quan thuế (nếu có)",
    "fees": {
      "description": "Phí thẩm định giao đất, cho thuê đất và Đơn giá đăng ký và cấp Giấy chứng nhận. Ghi chú: trường hợp nhiều thửa đất lập chung trong 1 hồ sơ và cấp chung 1 GCN hoặc 1 hồ sơ mà nhiều GCN thì đơn giá đối với mỗi thửa đất (GCN) tăng thêm là: 566.000 đồng/giấy.",
      "details": [
        {
          "type": "Phí thẩm định",
          "service": "Hồ sơ xin cấp quyền sử dụng đất để sản xuất, kinh doanh",
          "cost": "4.000.000 đồng"
        },
        {
          "type": "Phí thẩm định",
          "service": "Hồ sơ xin cấp quyền sử dụng đất để làm nhà ở",
          "cost": "300.000 đồng"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp GCN)",
          "service": "Cấp GCN đối với đất",
          "cost": "1.887.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp GCN)",
          "service": "Cấp GCN đối với tài sản",
          "cost": "2.024.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp GCN)",
          "service": "Cấp GCN đối với đất và tài sản",
          "cost": "2.717.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp GCN)",
          "service": "Cấp GCN đối với đất",
          "cost": "923.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp GCN)",
          "service": "Cấp GCN đối với tài sản",
          "cost": "1.062.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp GCN)",
          "service": "Cấp GCN đối với đất và tài sản",
          "cost": "1.351.000 đồng/giấy"
        }
      ],
      "le_phi": "Lệ phí cấp Giấy chứng nhận: 100.000 đồng/giấy (cấp mới), 25.000 đồng/giấy (chỉnh lý).",
      "exemption": null
    },
    "legalBasis": "(1) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ.\n(2) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ.\n(3) Nghị quyết 13/2015/NQ-HĐND ngày 14/12/2015 của HĐND tỉnh Bình Phước.\n(4) Nghị quyết số 10/2019/NQ-HĐND ngày 05/7/2019 của HĐND tỉnh.\n(5) Quyết định 19/2021/QĐ-UBND ngày 10/6/2021 của UBND tỉnh Bình Phước.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đề nghị điều chỉnh quyết định giao đất/cho thuê đất/cho phép chuyển mục đích sử dụng đất theo Mẫu số 03 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Đơn đề nghị điều chỉnh thời hạn sử dụng đất của dự án đầu tư theo Mẫu số 12 ban hành kèm theo Nghị định 151/2025/NĐ-CP (trường hợp điều chỉnh thời hạn).",
      "Bản gốc Giấy chứng nhận đã cấp.",
      "Văn bản của cơ quan có thẩm quyền cho phép thay đổi thời hạn hoạt động của dự án đầu tư (trường hợp điều chỉnh thời hạn)."
    ]
  },
  {
    "id": "1.013827",
    "name": "Điều chỉnh quyết định giao đất, cho thuê đất, cho phép chuyển mục đích sử dụng đất do sai sót về ranh giới, vị trí, diện tích, mục đích sử dụng giữa bản đồ quy hoạch, bản đồ địa chính, quyết định giao đất, cho thuê đất, cho phép chuyển mục đích sử dụng đất và số liệu bàn giao đất trên thực địa",
    "level": "Tỉnh",
    "status": "Mới",
    "processingTime": "07 ngày kể từ ngày nhận đủ hồ sơ hợp lệ. Đối với các xã miền núi, biên giới, đảo, vùng có điều kiện kinh tế - xã hội khó khăn, vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn thì thời gian thực hiện 25 ngày.",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh\nb) Nộp thông qua dịch vụ bưu chính công ích\nc) Nộp trực tuyến (Một phần)",
    "agency": "(1) UBND cấp tỉnh\n(2) Chủ tịch UBND cấp tỉnh\n(3) Cơ quan chuyên môn về nông nghiệp và môi trường cấp tỉnh\n(4) Văn phòng đăng ký đất đai hoặc Chi nhánh Văn phòng đăng ký đất đai\n(5) Cơ quan thuế (nếu có)",
    "fees": {
      "description": "Phí thẩm định giao đất, cho thuê đất và Đơn giá đăng ký và cấp Giấy chứng nhận. Ghi chú: trường hợp nhiều thửa đất lập chung trong 1 hồ sơ và cấp chung 1 GCN hoặc 1 hồ sơ mà nhiều GCN thì đơn giá đối với mỗi thửa đất (GCN) tăng thêm là: 566.000 đồng/giấy.",
      "details": [
        {
          "type": "Phí thẩm định",
          "service": "Hồ sơ xin cấp quyền sử dụng đất để sản xuất, kinh doanh",
          "cost": "4.000.000 đồng"
        },
        {
          "type": "Phí thẩm định",
          "service": "Hồ sơ xin cấp quyền sử dụng đất để làm nhà ở",
          "cost": "300.000 đồng"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp GCN)",
          "service": "Cấp GCN đối với đất",
          "cost": "1.887.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp GCN)",
          "service": "Cấp GCN đối với tài sản",
          "cost": "2.024.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp GCN)",
          "service": "Cấp GCN đối với đất và tài sản",
          "cost": "2.717.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp GCN)",
          "service": "Cấp GCN đối với đất",
          "cost": "923.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp GCN)",
          "service": "Cấp GCN đối với tài sản",
          "cost": "1.062.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp GCN)",
          "service": "Cấp GCN đối với đất và tài sản",
          "cost": "1.351.000 đồng/giấy"
        }
      ],
      "le_phi": "Lệ phí cấp Giấy chứng nhận: 100.000 đồng/giấy (cấp mới), 25.000 đồng/giấy (chỉnh lý).",
      "exemption": null
    },
    "legalBasis": "(1) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ.\n(2) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ.\n(3) Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(4) Nghị quyết 22/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(5) Nghị quyết số 10/2019/NQ-HĐND ngày 05/7/2019 của HĐND tỉnh.\n(6) Quyết định 19/2021/QĐ-UBND ngày 10/6/2021 của UBND tỉnh Bình Phước.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đề nghị điều chỉnh quyết định giao đất/cho thuê đất/cho phép chuyển mục đích sử dụng đất theo Mẫu số 03 ban hành kèm theo Nghị định 151/2025/NĐ-CP."
    ]
  },
  {
    "id": "1.013831",
    "name": "Đăng ký biến động quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất trong các trường hợp chuyển đổi quyền sử dụng đất nông nghiệp mà không theo phương án dồn điền, đổi thửa; chuyển nhượng, thừa kế, tặng cho quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất; góp vốn bằng quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất; cho thuê, cho thuê lại quyền sử dụng đất trong dự án xây dựng kinh doanh kết cấu hạ tầng; bán hoặc tặng cho hoặc để thừa kế hoặc góp vốn bằng tài sản gắn liền với đất thuê của Nhà nước theo hình thức thuê đất trả tiền hàng năm",
    "level": "Tỉnh",
    "status": "Mới",
    "processingTime": "- Không quá 05 ngày làm việc đối với thủ tục chuyển đổi quyền sử dụng đất nông nghiệp mà không theo phương án dồn điền, đổi thửa hoặc chuyển nhượng, thừa kế, tặng cho quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất, góp vốn bằng quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất, bán, thừa kế, tặng cho hoặc góp vốn bằng tài sản gắn liền với đất được Nhà nước cho thuê đất thu tiền thuê đất hàng năm.\n- Không quá 04 ngày làm việc đối với thủ tục cho thuê, cho thuê lại quyền sử dụng đất trong dự án xây dựng kinh doanh kết cấu hạ tầng.",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường\nb) Nộp thông qua dịch vụ bưu chính\nc) Nộp trên Cổng Dịch vụ công quốc gia (Một phần)",
    "agency": "(1) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai\n(2) UBND cấp xã\n(3) Cơ quan Thuế",
    "fees": {
      "description": "Đơn giá đăng ký và cấp GCN.",
      "details": [
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Đối với đất",
          "cost": "1.622.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Đối với tài sản",
          "cost": "1.591.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Đối với cả đất và tài sản",
          "cost": "2.082.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý)",
          "service": "Đối với đất",
          "cost": "1.405.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý)",
          "service": "Đối với tài sản",
          "cost": "1.398.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý)",
          "service": "Đối với cả đất và tài sản",
          "cost": "1.806.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp mới)",
          "service": "Đối với đất",
          "cost": "923.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp mới)",
          "service": "Đối với tài sản",
          "cost": "1.062.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp mới)",
          "service": "Đối với đất và tài sản",
          "cost": "1.351.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Chỉnh lý)",
          "service": "Đối với đất",
          "cost": "630.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Chỉnh lý)",
          "service": "Đối với tài sản",
          "cost": "788.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Chỉnh lý)",
          "service": "Đối với đất và tài sản",
          "cost": "974.000 đồng/giấy"
        }
      ],
      "le_phi": "- Cấp mới giấy chứng nhận: 100.000 đồng/giấy.\n- Cấp mới giấy chứng nhận đối với cả đất và tài sản: 500.000 đồng/giấy.\n- Chỉnh lý Giấy chứng nhận đã cấp: 25.000 đồng/giấy.",
      "exemption": null
    },
    "legalBasis": "(1) Luật Đất đai số 31/2024/QH15 ngày 18/01/2024 được sửa đổi bổ sung một số điều bởi Luật số 43/2024/QH15, Luật số 47/2024/QH15 và Luật số 58/2024/QH15 của Quốc hội.\n(2) Nghị định số 101/2024/NĐ-CP ngày 29/7/2024 của Chính phủ.\n(3) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ.\n(4) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ.\n(5) Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(6) Nghị quyết 22/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đăng ký biến động đất đai, tài sản gắn liền với đất theo Mẫu số 18 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Bản gốc Giấy chứng nhận đã cấp.",
      "Hợp đồng hoặc văn bản về việc chuyển đổi, chuyển nhượng, thừa kế, tặng cho, góp vốn, cho thuê, cho thuê lại quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất."
    ]
  },
  {
    "id": "1.013833",
    "name": "Đăng ký biến động đối với trường hợp đổi tên hoặc thay đổi thông tin về người sử dụng đất, chủ sở hữu tài sản gắn liền với đất hoặc thay đổi số hiệu hoặc địa chỉ của thửa đất, thay đổi hạn chế quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất hoặc có thay đổi quyền đối với thửa đất liền kề, giảm diện tích thửa đất do sạt lở tự nhiên",
    "level": "Tỉnh",
    "status": "Mới",
    "processingTime": "- Không quá 04 ngày làm việc đối với thủ tục đổi tên hoặc thay đổi thông tin về người sử dụng đất, chủ sở hữu tài sản gắn liền với đất hoặc thay đổi số hiệu hoặc địa chỉ của thửa đất.\n- Không quá 05 ngày làm việc đối với thủ tục thay đổi hạn chế quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất hoặc có thay đổi quyền đối với thửa đất liền kề.\n- Không quá 10 ngày làm việc đối với thủ tục giảm diện tích thửa đất do sạt lở tự nhiên.",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường\nb) Nộp thông qua dịch vụ bưu chính\nc) Nộp trên Cổng Dịch vụ công quốc gia (Một phần)",
    "agency": "(1) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai\n(2) Cơ quan Thuế",
    "fees": {
      "description": "Đơn giá đăng ký và cấp Giấy chứng nhận.",
      "details": [
        {
          "type": "Hồ sơ tổ chức (Cấp mới - Đổi tên/thay đổi thông tin)",
          "service": "Đối với đất",
          "cost": "1.622.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp mới - Đổi tên/thay đổi thông tin)",
          "service": "Đối với tài sản",
          "cost": "1.591.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp mới - Đổi tên/thay đổi thông tin)",
          "service": "Đối với cả đất và tài sản",
          "cost": "2.082.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý - Đổi tên/thay đổi thông tin)",
          "service": "Đối với đất",
          "cost": "1.350.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý - Đổi tên/thay đổi thông tin)",
          "service": "Đối với tài sản",
          "cost": "1.347.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý - Đổi tên/thay đổi thông tin)",
          "service": "Đối với cả đất và tài sản",
          "cost": "1.734.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý - Thay đổi hạn chế quyền)",
          "service": "Đối với đất",
          "cost": "1.360.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý - Thay đổi hạn chế quyền)",
          "service": "Đối với tài sản",
          "cost": "1.350.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý - Thay đổi hạn chế quyền)",
          "service": "Đối với cả đất và tài sản",
          "cost": "1.742.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý - Sạt lở tự nhiên)",
          "service": "Đối với đất",
          "cost": "1.356.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý - Sạt lở tự nhiên)",
          "service": "Đối với tài sản",
          "cost": "1.346.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý - Sạt lở tự nhiên)",
          "service": "Đối với cả đất và tài sản",
          "cost": "1.743.000 đồng/giấy"
        }
      ],
      "le_phi": "- Cấp mới giấy chứng nhận: 100.000 đồng/giấy.\n- Cấp mới giấy chứng nhận đối với cả đất và tài sản: 500.000 đồng/giấy.\n- Chỉnh lý Giấy chứng nhận đã cấp: 25.000 đồng/giấy.",
      "exemption": null
    },
    "legalBasis": "(1) Luật Đất đai số 31/2024/QH15 ngày 18/01/2024 được sửa đổi bổ sung một số điều bởi Luật số 43/2024/QH15, Luật số 47/2024/QH15 và Luật số 58/2024/QH15 của Quốc hội.\n(2) Nghị định số 101/2024/NĐ-CP ngày 29/7/2024 của Chính phủ.\n(3) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ.\n(4) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ.\n(5) Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(6) Nghị quyết 22/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(7) Nghị quyết số 10/2019/NQ-HĐND ngày 05/7/2019 của HĐND tỉnh.\n(8) Quyết định 19/2021/QĐ-UBND ngày 10/6/2021 của UBND tỉnh Bình Phước.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đăng ký biến động đất đai, tài sản gắn liền với đất theo Mẫu số 18 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Bản gốc Giấy chứng nhận đã cấp.",
      "Giấy tờ pháp lý chứng minh việc đổi tên, thay đổi thông tin (Quyết định của cơ quan nhà nước, Giấy đăng ký kinh doanh mới...).",
      "Văn bản thỏa thuận về việc thay đổi hạn chế quyền (nếu có).",
      "Văn bản xác nhận của UBND cấp xã về việc sạt lở tự nhiên (trường hợp giảm diện tích do sạt lở)."
    ]
  },
  {
    "id": "1.013977",
    "name": "Đăng ký biến động thay đổi quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất do chia, tách, hợp nhất, sáp nhập tổ chức hoặc chuyển đổi mô hình tổ chức, chuyển đổi loại hình doanh nghiệp theo quy định của pháp luật về doanh nghiệp, điều chỉnh quy hoạch xây dựng chi tiết, cấp Giấy chứng nhận cho từng thửa đất theo quy hoạch xây dựng chi tiết cho chủ đầu tư dự án có nhu cầu",
    "level": "Tỉnh",
    "status": "Mới",
    "processingTime": "- Không quá 08 ngày làm việc đối với trường hợp thay đổi quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất do chia, tách, hợp nhất, sáp nhập tổ chức hoặc chuyển đổi mô hình tổ chức, chuyển đổi loại hình doanh nghiệp.\n- Không quá 05 ngày làm việc đối với trường hợp cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất theo quy hoạch xây dựng chi tiết hoặc điều chỉnh quy hoạch xây dựng chi tiết.",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường\nb) Nộp thông qua dịch vụ bưu chính\nc) Nộp trên Cổng Dịch vụ công quốc gia (Một phần)",
    "agency": "(1) Văn phòng Đăng ký đất đai\n(2) Cơ quan Thuế",
    "fees": {
      "description": "Đơn giá đăng ký và cấp Giấy chứng nhận. Ghi chú: Trường hợp tổ chức đề nghị cấp giấy chứng nhận đối với các dự án có nhiều thửa đất, giấy chứng nhận cấp từ thửa thứ hai thu 50.000 đồng/GCN/thửa đất.",
      "details": [
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Cấp GCN quyền sử dụng đất",
          "cost": "1.073.500 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Cấp GCN về tài sản",
          "cost": "1.121.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Cấp GCN đối với cả đất và tài sản",
          "cost": "1.339.500 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý)",
          "service": "Chứng nhận biến động về quyền sử dụng đất",
          "cost": "902.500 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý)",
          "service": "Chứng nhận biến động về tài sản",
          "cost": "902.500 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý)",
          "service": "Chứng nhận biến động cả đất và tài sản",
          "cost": "1.140.000 đồng/hồ sơ/thửa/GCN"
        }
      ],
      "le_phi": "* Cấp mới Giấy chứng nhận: 100.000 đồng/giấy.\n* Chỉnh lý Giấy chứng nhận đã cấp: 25.000 đồng/giấy.",
      "exemption": null
    },
    "legalBasis": "(1) Luật Đất đai số 31/2024/QH15 ngày 18/01/2024 được sửa đổi bổ sung một số điều bởi Luật số 43/2024/QH15, Luật số 47/2024/QH15 và Luật số 58/2024/QH15 của Quốc hội.\n(2) Nghị định số 101/2024/NĐ-CP ngày 29/7/2024 của Chính phủ.\n(3) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ.\n(4) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ.\n(5) Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(6) Nghị quyết 22/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(7) Nghị quyết số 10/2019/NQ-HĐND ngày 05/7/2019 của HĐND tỉnh.\n(8) Quyết định 19/2021/QĐ-UBND ngày 10/6/2021 của UBND tỉnh Bình Phước.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đăng ký biến động đất đai, tài sản gắn liền với đất theo Mẫu số 18 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Bản gốc Giấy chứng nhận đã cấp.",
      "Hợp đồng hoặc văn bản về việc chia, tách, hợp nhất, sáp nhập của tổ chức theo quy định của pháp luật.",
      "Văn bản của cơ quan có thẩm quyền cho phép hoặc phê duyệt việc chia, tách, hợp nhất, sáp nhập, chuyển đổi loại hình doanh nghiệp.",
      "Bản vẽ quy hoạch chi tiết đã được phê duyệt (đối với trường hợp điều chỉnh quy hoạch)."
    ]
  },
  {
    "id": "1.013980",
    "name": "Đăng ký biến động đối với trường hợp thay đổi quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất theo thỏa thuận của các thành viên hộ gia đình hoặc của vợ và chồng; quyền sử dụng đất xây dựng công trình trên mặt đất phục vụ cho việc vận hành, khai thác sử dụng công trình ngầm, quyền sở hữu công trình ngầm; bán tài sản, điều chuyển, chuyển nhượng quyền sử dụng đất là tài sản công theo quy định của pháp luật về quản lý, sử dụng tài sản công; nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất theo kết quả giải quyết tranh chấp, khiếu nại, tố cáo về đất đai hoặc bản án, quyết định của Tòa án, quyết định thi hành án của cơ quan thi hành án đã được thi hành; quyết định hoặc phán quyết của Trọng tài thương mại Việt Nam về giải quyết tranh chấp giữa các bên phát sinh từ hoạt động thương mại liên quan đến đất đai; nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất do xử lý tài sản thế chấp là quyền sử dụng đất, tài sản gắn liền với đất đã được đăng ký, bao gồm cả xử lý khoản nợ có nguồn gốc từ khoản nợ xấu của tổ chức tín dụng, chi nhánh ngân hàng nước ngoài",
    "level": "Tỉnh",
    "status": "Mới",
    "processingTime": "- Không quá 08 ngày làm việc đối với thủ tục Đăng ký biến động đối với trường hợp thay đổi quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất do thỏa thuận của các thành viên hộ gia đình hoặc của vợ và chồng; thủ tục đăng ký biến động đối với trường hợp nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất theo kết quả hòa giải thành về tranh chấp đất đai, khiếu nại, tố cáo về đất đai hoặc bản án, quyết định của tòa án, quyết định thi hành án của cơ quan thi hành án đã được thi hành; quyết định hoặc phán quyết của trọng tài thương mại Việt Nam về giải quyết tranh chấp của các bên phát sinh từ hoạt động thương mại liên quan đến đất đai; thủ tục đăng ký biến động đối với trường hợp nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất do xử lý tài sản thế chấp.\n- Không quá 10 ngày làm việc đối với trường hợp thay đổi về quyền sử dụng đất xây dựng công trình trên mặt đất phục vụ cho việc vận hành, khai thác sử dụng công trình ngầm, quyền sở hữu công trình ngầm; bán tài sản, điều chuyển, chuyển nhượng quyền sử dụng đất là tài sản công theo quy định của pháp luật về quản lý, sử dụng tài sản công.",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường\nb) Nộp thông qua dịch vụ bưu chính\nc) Nộp trên Cổng Dịch vụ công quốc gia (Một phần)",
    "agency": "(1) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai\n(2) Cơ quan Thuế",
    "fees": {
      "description": "Đơn giá đăng ký và cấp Giấy chứng nhận.",
      "details": [
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Đối với đất",
          "cost": "1.622.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Đối với tài sản",
          "cost": "1.591.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Đối với cả đất và tài sản",
          "cost": "2.082.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý)",
          "service": "Đối với đất",
          "cost": "1.403.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý)",
          "service": "Đối với tài sản",
          "cost": "1.397.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý)",
          "service": "Đối với cả đất và tài sản",
          "cost": "1.803.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp mới)",
          "service": "Đối với đất",
          "cost": "923.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp mới)",
          "service": "Đối với tài sản",
          "cost": "1.062.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp mới)",
          "service": "Đối với đất và tài sản",
          "cost": "1.351.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Chỉnh lý)",
          "service": "Đối với đất",
          "cost": "630.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Chỉnh lý)",
          "service": "Đối với tài sản",
          "cost": "783.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Chỉnh lý)",
          "service": "Đối với đất và tài sản",
          "cost": "974.000 đồng/giấy"
        }
      ],
      "le_phi": "- Cấp mới giấy chứng nhận: 100.000 đồng/giấy.\n- Chỉnh lý Giấy chứng nhận đã cấp: 25.000 đồng/giấy.",
      "exemption": null
    },
    "legalBasis": "(1) Luật Đất đai số 31/2024/QH15 ngày 18/01/2024 được sửa đổi bổ sung một số điều bởi Luật số 43/2024/QH15, Luật số 47/2024/QH15 và Luật số 58/2024/QH15 của Quốc hội.\n(2) Nghị định số 101/2024/NĐ-CP ngày 29/7/2024 của Chính phủ.\n(3) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ.\n(4) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ.\n(5) Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(6) Nghị quyết 22/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(7) Nghị quyết số 10/2019/NQ-HĐND ngày 05/7/2019 của HĐND tỉnh.\n(8) Quyết định 19/2021/QĐ-UBND ngày 10/6/2021 của UBND tỉnh Bình Phước.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đăng ký biến động đất đai, tài sản gắn liền với đất theo Mẫu số 18 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Bản gốc Giấy chứng nhận đã cấp.",
      "Văn bản thỏa thuận của các thành viên hộ gia đình hoặc của vợ và chồng (nếu có).",
      "Bản án, quyết định của Tòa án, quyết định thi hành án của cơ quan thi hành án (nếu có).",
      "Văn bản về việc xử lý tài sản thế chấp (nếu có).",
      "Chứng từ thực hiện nghĩa vụ tài chính; giấy tờ liên quan đến việc miễn, giảm nghĩa vụ tài chính (nếu có)."
    ]
  },
  {
    "id": "1.013988",
    "name": "Xóa ghi nợ tiền sử dụng đất, lệ phí trước bạ trên Giấy chứng nhận đã cấp",
    "level": "Tỉnh",
    "status": "Mới",
    "processingTime": "Trong ngày làm việc khi nhận được đủ hồ sơ xóa nợ. Trường hợp nhận được yêu cầu sau 15 giờ thì cung cấp vào ngày làm việc tiếp theo.",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường\nb) Nộp thông qua dịch vụ bưu chính\nc) Nộp trên Cổng Dịch vụ công quốc gia (Một phần)",
    "agency": "Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai",
    "fees": {
      "description": "Đơn giá đăng ký và cấp Giấy chứng nhận.",
      "details": [
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp mới)",
          "service": "Đối với đất",
          "cost": "923.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp mới)",
          "service": "Đối với tài sản",
          "cost": "1.062.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp mới)",
          "service": "Đối với đất và tài sản",
          "cost": "1.351.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Chỉnh lý)",
          "service": "Đối với đất",
          "cost": "630.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Chỉnh lý)",
          "service": "Đối với tài sản",
          "cost": "783.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Chỉnh lý)",
          "service": "Đối với đất và tài sản",
          "cost": "974.000 đồng/giấy"
        }
      ],
      "le_phi": "- Cấp mới giấy chứng nhận: 100.000 đồng/giấy.\n- Chỉnh lý Giấy chứng nhận đã cấp: 25.000 đồng/giấy.",
      "exemption": null
    },
    "legalBasis": "(1) Luật Đất đai số 31/2024/QH15 ngày 18/01/2024 được sửa đổi bổ sung một số điều bởi Luật số 43/2024/QH15, Luật số 47/2024/QH15 và Luật số 58/2024/QH15 của Quốc hội.\n(2) Nghị định số 101/2024/NĐ-CP ngày 29/7/2024 của Chính phủ.\n(3) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ.\n(4) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ.\n(5) Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(6) Nghị quyết 22/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(7) Nghị quyết số 10/2019/NQ-HĐND ngày 05/7/2019 của HĐND tỉnh.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đăng ký biến động đất đai, tài sản gắn liền với đất theo Mẫu số 18 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Bản gốc Giấy chứng nhận đã cấp.",
      "Chứng từ chứng minh đã hoàn thành nghĩa vụ tài chính (biên lai, giấy nộp tiền...)."
    ]
  },
  {
    "id": "1.013992",
    "name": "Đăng ký biến động chuyển mục đích sử dụng đất không phải xin phép cơ quan nhà nước có thẩm quyền",
    "level": "Tỉnh",
    "status": "Mới",
    "processingTime": "Không quá 07 ngày làm việc",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường\nb) Nộp thông qua dịch vụ bưu chính\nc) Nộp trên Cổng Dịch vụ công quốc gia (Một phần)",
    "agency": "(1) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai\n(2) Cơ quan Thuế",
    "fees": {
      "description": "Đơn giá đăng ký và cấp Giấy chứng nhận.",
      "details": [
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Đối với đất",
          "cost": "1.622.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Đối với tài sản",
          "cost": "1.591.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Cấp mới)",
          "service": "Đối với cả đất và tài sản",
          "cost": "2.082.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý)",
          "service": "Đối với đất",
          "cost": "1.410.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý)",
          "service": "Đối với tài sản",
          "cost": "1.401.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ tổ chức (Chỉnh lý)",
          "service": "Đối với cả đất và tài sản",
          "cost": "1.813.000 đồng/giấy"
        }
      ],
      "le_phi": "- Cấp mới giấy chứng nhận: 100.000 đồng/giấy.\n- Chỉnh lý Giấy chứng nhận đã cấp: 25.000 đồng/giấy.",
      "exemption": null
    },
    "legalBasis": "(1) Luật Đất đai số 31/2024/QH15 ngày 18/01/2024 được sửa đổi bổ sung một số điều bởi Luật số 43/2024/QH15, Luật số 47/2024/QH15 và Luật số 58/2024/QH15 của Quốc hội.\n(2) Nghị định số 101/2024/NĐ-CP ngày 29/7/2024 của Chính phủ.\n(3) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ.\n(4) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ.\n(5) Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(6) Nghị quyết 22/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(7) Nghị quyết số 10/2019/NQ-HĐND ngày 05/7/2019 của HĐND tỉnh.\n(8) Quyết định 19/2021/QĐ-UBND ngày 10/6/2021 của UBND tỉnh Bình Phước.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đăng ký biến động đất đai, tài sản gắn liền với đất theo Mẫu số 18 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Bản gốc Giấy chứng nhận đã cấp."
    ]
  },
  {
    "id": "1.013993",
    "name": "Đăng ký, cấp Giấy chứng nhận đối với trường hợp hộ gia đình, cá nhân đang sử dụng đất không đúng mục đích đã được Nhà nước công nhận quyền sử dụng đất trước ngày 01 tháng 7 năm 2014",
    "level": "Tỉnh",
    "status": "Mới",
    "processingTime": "Không quá 12 ngày làm việc",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường\nb) Nộp thông qua dịch vụ bưu chính\nc) Nộp trên Cổng Dịch vụ công quốc gia (Một phần)",
    "agency": "(1) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai\n(2) Cơ quan Thuế",
    "fees": {
      "description": "Đơn giá đăng ký và cấp Giấy chứng nhận.",
      "details": [
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp mới)",
          "service": "Đối với đất",
          "cost": "923.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp mới)",
          "service": "Đối với tài sản",
          "cost": "1.062.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp mới)",
          "service": "Đối với đất và tài sản",
          "cost": "1.351.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Chỉnh lý)",
          "service": "Đối với đất",
          "cost": "630.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Chỉnh lý)",
          "service": "Đối với tài sản",
          "cost": "783.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Chỉnh lý)",
          "service": "Đối với đất và tài sản",
          "cost": "974.000 đồng/giấy"
        }
      ],
      "le_phi": "- Cấp mới giấy chứng nhận: 100.000 đồng/giấy.\n- Chỉnh lý Giấy chứng nhận đã cấp: 25.000 đồng/giấy.",
      "exemption": null
    },
    "legalBasis": "(1) Luật Đất đai số 31/2024/QH15 ngày 18/01/2024 được sửa đổi bổ sung một số điều bởi Luật số 43/2024/QH15, Luật số 47/2024/QH15 và Luật số 58/2024/QH15 của Quốc hội.\n(2) Nghị định số 101/2024/NĐ-CP ngày 29/7/2024 của Chính phủ.\n(3) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ.\n(4) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ.\n(5) Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(6) Nghị quyết 22/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(7) Nghị quyết số 10/2019/NQ-HĐND ngày 05/7/2019 của HĐND tỉnh.\n(8) Quyết định 19/2021/QĐ-UBND ngày 10/6/2021 của UBND tỉnh Bình Phước.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đăng ký biến động đất đai, tài sản gắn liền với đất theo Mẫu số 18 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Bản gốc Giấy chứng nhận đã cấp.",
      "Chứng từ thực hiện nghĩa vụ tài chính; giấy tờ liên quan đến việc miễn, giảm nghĩa vụ tài chính (nếu có)."
    ]
  },
{
    "id": "1.013949",
    "name": "Giao đất, cho thuê đất, chuyển mục đích sử dụng đất đối với trường hợp giao đất, cho thuê đất không đấu giá quyền sử dụng đất, không đấu thầu lựa chọn nhà đầu tư thực hiện dự án có sử dụng đất; trường hợp giao đất, cho thuê đất thông qua đấu thầu lựa chọn nhà đầu tư thực hiện dự án có sử dụng đất; giao đất và giao rừng, cho thuê đất và cho thuê rừng, gia hạn sử dụng đất khi hết thời hạn sử dụng đất",
    "level": "Xã",
    "status": "Mới",
    "processingTime": "Không quá 15 ngày kể từ ngày nhận đủ hồ sơ hợp lệ. Đối với các xã miền núi, biên giới, đảo, vùng có điều kiện kinh tế - xã hội khó khăn, vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn thì thời gian thực hiện không quá 25 ngày.",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công cấp xã\nb) Nộp thông qua dịch vụ bưu chính công ích\nc) Nộp trực tuyến trên Cổng dịch vụ công quốc gia (Một phần)",
    "agency": "Chủ tịch Ủy ban nhân dân cấp xã. Cơ quan chuyên môn về nông nghiệp và môi trường cấp xã",
    "fees": {
      "description": "Phí thẩm định giao đất, cho thuê đất và Đơn giá đăng ký và cấp Giấy chứng nhận. Ghi chú: Trường hợp nhiều thửa đất lập chung trong 1 hồ sơ và cấp chung 1 GCN hoặc 1 hồ sơ mà nhiều GCN thì đơn giá đối với mỗi thửa đất (GCN) tăng thêm là: 566.000 đồng/giấy.",
      "details": [
        {
          "type": "Phí thẩm định",
          "service": "Hồ sơ xin cấp quyền sử dụng đất để sản xuất, kinh doanh",
          "cost": "4.000.000 đồng"
        },
        {
          "type": "Phí thẩm định",
          "service": "Hồ sơ xin cấp quyền sử dụng đất để làm nhà ở",
          "cost": "300.000 đồng"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp GCN)",
          "service": "Cấp GCN đối với đất",
          "cost": "1.887.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp GCN)",
          "service": "Cấp GCN đối với tài sản",
          "cost": "2.024.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp GCN)",
          "service": "Cấp GCN đối với đất và tài sản",
          "cost": "2.717.000 đồng/giấy"
        }
      ],
      "le_phi": "- Đối với đất: 100.000 đồng/giấy.\n- Đối với đất và tài sản: 500.000 đồng/giấy.",
      "exemption": null
    },
    "legalBasis": "(1) Luật Đất đai số 31/2024/QH15 ngày 18/01/2024 được sửa đổi bổ sung một số điều bởi Luật số 43/2024/QH15, Luật số 47/2024/QH15 và Luật số 58/2024/QH15 của Quốc hội.\n(2) Nghị định số 102/2024/NĐ-CP ngày 30/7/2024 của Chính phủ.\n(3) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ.\n(4) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ.\n(5) Nghị định số 136/2025/NĐ-CP ngày 12/6/2025 của Chính phủ.\n(6) Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(7) Nghị quyết 22/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(8) Quyết định 19/2021/QĐ-UBND ngày 10/6/2021 của UBND tỉnh Bình Phước.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đề nghị giao đất/thuê đất/chuyển mục đích sử dụng đất theo Mẫu số 01 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Bản sao giấy chứng nhận đầu tư hoặc văn bản chấp thuận đầu tư.",
      "Văn bản thẩm định nhu cầu sử dụng đất; thẩm định điều kiện giao đất, cho thuê đất, cho phép chuyển mục đích sử dụng đất.",
      "Trích lục bản đồ địa chính thửa đất hoặc trích đo địa chính thửa đất."
    ]
  },
  {
    "id": "1.013950",
    "name": "Chuyển hình thức giao đất, cho thuê đất",
    "level": "Xã",
    "status": "Mới",
    "processingTime": "Không quá 15 ngày kể từ ngày nhận đủ hồ sơ hợp lệ. Đối với các xã miền núi, biên giới, đảo, vùng có điều kiện kinh tế - xã hội khó khăn, vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn thì thời gian thực hiện không quá 25 ngày.",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công cấp xã\nb) Nộp thông qua dịch vụ bưu chính công ích\nc) Nộp trực tuyến trên Cổng dịch vụ công quốc gia (Một phần)",
    "agency": "Chủ tịch Ủy ban nhân dân cấp xã. Cơ quan chuyên môn về nông nghiệp và môi trường cấp xã",
    "fees": {
      "description": "Phí thẩm định giao đất, cho thuê đất và Đơn giá đăng ký và cấp Giấy chứng nhận.",
      "details": [
        {
          "type": "Phí thẩm định",
          "service": "Hồ sơ xin cấp quyền sử dụng đất để sản xuất, kinh doanh",
          "cost": "4.000.000 đồng"
        },
        {
          "type": "Phí thẩm định",
          "service": "Hồ sơ xin cấp quyền sử dụng đất để làm nhà ở",
          "cost": "300.000 đồng"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp GCN)",
          "service": "Đối với đất",
          "cost": "923.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp GCN)",
          "service": "Đối với tài sản",
          "cost": "1.062.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp GCN)",
          "service": "Đối với đất và tài sản",
          "cost": "1.351.000 đồng/giấy"
        }
      ],
      "le_phi": "Lệ phí cấp Giấy chứng nhận: 25.000 đồng/giấy.",
      "exemption": null
    },
    "legalBasis": "(1) Luật Đất đai số 31/2024/QH15 ngày 18/01/2024 được sửa đổi bổ sung một số điều bởi Luật số 43/2024/QH15, Luật số 47/2024/QH15 và Luật số 58/2024/QH15 của Quốc hội.\n(2) Nghị định số 102/2024/NĐ-CP ngày 30/7/2024 của Chính phủ.\n(3) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ.\n(4) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ.\n(5) Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(6) Nghị quyết 22/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(7) Nghị quyết 13/2015/NQ-HĐND ngày 14/12/2015 của HĐND tỉnh Bình Phước.\n(8) Nghị quyết số 10/2019/NQ-HĐND ngày 05/7/2019 của HĐND tỉnh.\n(9) Quyết định 19/2021/QĐ-UBND ngày 10/6/2021 của UBND tỉnh Bình Phước.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đề nghị chuyển hình thức giao đất/cho thuê đất theo Mẫu số 02 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Bản gốc Giấy chứng nhận đã cấp.",
      "Chứng từ thực hiện nghĩa vụ tài chính; giấy tờ liên quan đến việc miễn, giảm nghĩa vụ tài chính về đất đai, tài sản gắn liền với đất (nếu có)."
    ]
  },
  {
    "id": "1.013952",
    "name": "Điều chỉnh quyết định giao đất, cho thuê đất, cho phép chuyển mục đích sử dụng đất do thay đổi căn cứ quyết định giao đất, cho thuê đất, cho phép chuyển mục đích sử dụng đất, điều chỉnh thời hạn sử dụng đất của dự án đầu tư",
    "level": "Xã",
    "status": "Mới",
    "processingTime": "- Trường hợp đề nghị điều chỉnh quyết định giao đất, cho thuê đất, cho phép chuyển mục đích sử dụng đất: không quá 05 ngày kể từ ngày nhận đủ hồ sơ hợp lệ, đối với các xã miền núi, biên giới, đảo, vùng có điều kiện kinh tế - xã hội khó khăn, vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn thì thời gian thực hiện không quá 15 ngày.\n- Trường hợp đề nghị điều chỉnh thời hạn sử dụng đất của dự án đầu tư: không quá 15 ngày kể từ ngày nhận đủ hồ sơ hợp lệ, đối với các xã miền núi, biên giới, đảo, vùng có điều kiện kinh tế - xã hội khó khăn, vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn thì thời gian thực hiện không quá 25 ngày.",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công cấp xã\nb) Nộp thông qua dịch vụ bưu chính công ích\nc) Nộp trực tuyến trên Cổng dịch vụ công quốc gia (Một phần)",
    "agency": "Chủ tịch Ủy ban nhân dân cấp xã. Cơ quan chuyên môn về nông nghiệp và môi trường cấp xã",
    "fees": {
      "description": "Phí thẩm định giao đất, cho thuê đất và Đơn giá đăng ký và cấp Giấy chứng nhận.",
      "details": [
        {
          "type": "Phí thẩm định",
          "service": "Hồ sơ xin cấp quyền sử dụng đất để sản xuất, kinh doanh",
          "cost": "4.000.000 đồng"
        },
        {
          "type": "Phí thẩm định",
          "service": "Hồ sơ xin cấp quyền sử dụng đất để làm nhà ở",
          "cost": "300.000 đồng"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp GCN)",
          "service": "Đối với đất",
          "cost": "923.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp GCN)",
          "service": "Đối với tài sản",
          "cost": "1.062.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp GCN)",
          "service": "Đối với đất và tài sản",
          "cost": "1.351.000 đồng/giấy"
        }
      ],
      "le_phi": "Lệ phí cấp Giấy chứng nhận: 25.000 đồng/giấy.",
      "exemption": null
    },
    "legalBasis": "(1) Luật Đất đai số 31/2024/QH15 ngày 18/01/2024 được sửa đổi bổ sung một số điều bởi Luật số 43/2024/QH15, Luật số 47/2024/QH15 và Luật số 58/2024/QH15 của Quốc hội.\n(2) Nghị định số 102/2024/NĐ-CP ngày 30/7/2024 của Chính phủ.\n(3) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ.\n(4) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ.\n(5) Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(6) Nghị quyết 22/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(7) Nghị quyết 13/2015/NQ-HĐND ngày 14/12/2015 của HĐND tỉnh Bình Phước.\n(8) Nghị quyết số 10/2019/NQ-HĐND ngày 05/7/2019 của HĐND tỉnh.\n(9) Quyết định 19/2021/QĐ-UBND ngày 10/6/2021 của UBND tỉnh Bình Phước.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đề nghị điều chỉnh quyết định giao đất/cho thuê đất/cho phép chuyển mục đích sử dụng đất theo Mẫu số 03 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Đơn đề nghị điều chỉnh thời hạn sử dụng đất của dự án đầu tư theo Mẫu số 12 ban hành kèm theo Nghị định 151/2025/NĐ-CP (trường hợp điều chỉnh thời hạn).",
      "Bản gốc Giấy chứng nhận đã cấp.",
      "Văn bản của cơ quan có thẩm quyền cho phép thay đổi thời hạn hoạt động của dự án đầu tư (trường hợp điều chỉnh thời hạn)."
    ]
  },
  {
    "id": "1.013953",
    "name": "Điều chỉnh quyết định giao đất, cho thuê đất, cho phép chuyển mục đích sử dụng đất do sai sót về ranh giới, vị trí, diện tích, mục đích sử dụng giữa bản đồ quy hoạch, bản đồ địa chính, quyết định giao đất, cho thuê đất, cho phép chuyển mục đích sử dụng đất và số liệu bàn giao đất trên thực địa",
    "level": "Xã",
    "status": "Mới",
    "processingTime": "Không quá 15 ngày kể từ ngày nhận đủ hồ sơ hợp lệ. Đối với các xã miền núi, biên giới, đảo, vùng có điều kiện kinh tế - xã hội khó khăn, vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn thì thời gian thực hiện không quá 25 ngày.",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công cấp xã\nb) Nộp thông qua dịch vụ bưu chính công ích\nc) Nộp trực tuyến trên Cổng dịch vụ công quốc gia (Một phần)",
    "agency": "Chủ tịch Ủy ban nhân dân cấp xã. Cơ quan chuyên môn về nông nghiệp và môi trường cấp xã",
    "fees": {
      "description": "Phí thẩm định giao đất, cho thuê đất và Đơn giá đăng ký và cấp Giấy chứng nhận.",
      "details": [
        {
          "type": "Phí thẩm định",
          "service": "Hồ sơ xin cấp quyền sử dụng đất để sản xuất, kinh doanh",
          "cost": "4.000.000 đồng"
        },
        {
          "type": "Phí thẩm định",
          "service": "Hồ sơ xin cấp quyền sử dụng đất để làm nhà ở",
          "cost": "300.000 đồng"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp GCN)",
          "service": "Đối với đất",
          "cost": "923.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp GCN)",
          "service": "Đối với tài sản",
          "cost": "1.062.000 đồng/giấy"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp GCN)",
          "service": "Đối với đất và tài sản",
          "cost": "1.351.000 đồng/giấy"
        }
      ],
      "le_phi": "Lệ phí cấp Giấy chứng nhận: 25.000 đồng/giấy.",
      "exemption": null
    },
    "legalBasis": "(1) Luật Đất đai số 31/2024/QH15 ngày 18/01/2024 được sửa đổi bổ sung một số điều bởi Luật số 43/2024/QH15, Luật số 47/2024/QH15 và Luật số 58/2024/QH15 của Quốc hội.\n(2) Nghị định số 102/2024/NĐ-CP ngày 30/7/2024 của Chính phủ.\n(3) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ.\n(4) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ.\n(5) Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(6) Nghị quyết 22/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(7) Nghị quyết 13/2015/NQ-HĐND ngày 14/12/2015 của HĐND tỉnh Bình Phước.\n(8) Nghị quyết số 10/2019/NQ-HĐND ngày 05/7/2019 của HĐND tỉnh.\n(9) Quyết định 19/2021/QĐ-UBND ngày 10/6/2021 của UBND tỉnh Bình Phước.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đề nghị điều chỉnh quyết định giao đất/cho thuê đất/cho phép chuyển mục đích sử dụng đất theo Mẫu số 03 ban hành kèm theo Nghị định 151/2025/NĐ-CP."
    ]
  },
  {
    "id": "1.013962",
    "name": "Giao đất ở có thu tiền sử dụng đất không thông qua đấu giá, không đấu thầu lựa chọn nhà đầu tư thực hiện dự án có sử dụng đất đối với cá nhân là cán bộ, công chức, viên chức, sĩ quan tại ngũ, quân nhân chuyên nghiệp, công chức quốc phòng, công nhân và viên chức quốc phòng, sĩ quan, hạ sĩ quan, công nhân công an, người làm công tác cơ yếu và người làm công tác khác trong tổ chức cơ yếu hưởng lương từ ngân sách nhà nước mà chưa được giao đất ở, nhà ở; giáo viên, nhân viên y tế đang công tác tại các xã biên giới, hải đảo thuộc vùng có điều kiện kinh tế - xã hội khó khăn, vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn nhưng chưa có đất ở, nhà ở tại nơi công tác hoặc chưa được hưởng chính sách hỗ trợ về nhà ở theo quy định của pháp luật về nhà ở; cá nhân thường trú tại xã mà không có đất ở và chưa được Nhà nước giao đất ở hoặc chưa được hưởng chính sách hỗ trợ về nhà ở theo quy định của pháp luật về nhà ở",
    "level": "Xã",
    "status": "Mới",
    "processingTime": "Không quá 35 ngày kể từ ngày nhận đủ hồ sơ hợp lệ. Đối với các xã miền núi, biên giới, đảo, vùng có điều kiện kinh tế - xã hội khó khăn, vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn thì thời gian thực hiện không quá 45 ngày.",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính cấp xã\nb) Nộp thông qua dịch vụ bưu chính công ích\nc) Nộp trên Cổng dịch vụ công quốc gia (Một phần)",
    "agency": "Chủ tịch Ủy ban nhân dân cấp xã. Cơ quan chuyên môn về nông nghiệp và môi trường cấp xã",
    "fees": {
      "description": "Đơn giá đăng ký và cấp Giấy chứng nhận.",
      "details": [
        {
          "type": "Hồ sơ hộ gia đình, cá nhân",
          "service": "Cấp GCN quyền sử dụng đất",
          "cost": "880.000 đồng/GCN"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân",
          "service": "Cấp GCN về tài sản",
          "cost": "980.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân",
          "service": "Cấp GCN đối với cả đất và tài sản",
          "cost": "1.250.000 đồng/GCN"
        }
      ],
      "le_phi": "* Cấp giấy chứng nhận quyền sử dụng đất:\n- Đối với hộ gia đình, cá nhân tại các phường của thành phố Long Khánh và Biên Hòa: 30.000 đồng/giấy.\n- Đối với hộ gia đình, cá nhân tại các xã, thị trấn của các huyện và các xã của thành phố Long Khánh và Biên Hòa: 15.000 đồng/giấy.\n* Cấp giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất:\n- Đối với hộ gia đình, cá nhân tại các phường của thành phố Long Khánh và Biên Hòa: 120.000 đồng/giấy.\n- Đối với hộ gia đình, cá nhân tại các xã, thị trấn của các huyện và các xã của thành phố Long Khánh và Biên Hòa: 60.000 đồng/giấy.",
      "exemption": "Miễn giảm 100% theo Nghị quyết số 21/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai."
    },
    "legalBasis": "(1) Luật Đất đai số 31/2024/QH15 ngày 18/01/2024 được sửa đổi bổ sung một số điều bởi Luật số 43/2024/QH15, Luật số 47/2024/QH15 và Luật số 58/2024/QH15 của Quốc hội.\n(2) Nghị định số 102/2024/NĐ-CP ngày 30/7/2024 của Chính phủ.\n(3) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ.\n(4) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ.\n(5) Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(6) Nghị quyết 22/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đề nghị giao đất theo Mẫu số 01 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Giấy tờ chứng minh thuộc đối tượng được giao đất ở theo quy định.",
      "Sơ đồ vị trí thửa đất xin giao."
    ]
  },
  {
    "id": "1.013978",
    "name": "Đăng ký đất đai, tài sản gắn liền với đất, cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất lần đầu đối với cá nhân, cộng đồng dân cư, hộ gia đình, người gốc Việt Nam định cư ở nước ngoài",
    "level": "Xã",
    "status": "Mới",
    "processingTime": "- 17 ngày làm việc đối với trường hợp đăng ký đất đai, tài sản gắn liền với đất lần đầu; 20 ngày làm việc đối với trường hợp đăng ký đất đai, tài sản gắn liền với đất, cấp Giấy chứng nhận lần đầu.\n- Đối với các xã miền núi, hải đảo, vùng sâu, vùng xa, vùng có điều kiện kinh tế - xã hội khó khăn, vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn thì thời gian thực hiện 27 ngày làm việc đối với trường hợp đăng ký đất đai, tài sản gắn liền với đất lần đầu; 30 ngày làm việc đối với trường hợp đăng ký đất đai, tài sản gắn liền với đất, cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất lần đầu.",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công phường, xã\nb) Nộp thông qua dịch vụ bưu chính công ích\nc) Nộp trên cổng dịch vụ công quốc gia (Một phần)",
    "agency": "(1) Ủy ban nhân dân cấp xã\n(2) Chủ tịch Ủy ban nhân dân cấp xã\n(3) Chi nhánh Văn phòng đăng ký đất đai\n(4) Cơ quan thuế (nếu có)",
    "fees": {
      "description": "Đơn giá đăng ký và Cấp giấy chứng nhận. Ghi chú: Trường hợp một thửa đất có nhiều hộ gia đình, cá nhân đồng sử dụng thì phải cấp mỗi người đồng sử dụng một giấy chứng nhận, mỗi giấy chứng nhận cấp thêm cho người đồng sử dụng thu 50.000 đồng/người đồng sử dụng.",
      "details": [
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp mới)",
          "service": "Cấp GCN quyền sử dụng đất",
          "cost": "880.000 đồng/GCN"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp mới)",
          "service": "Cấp GCN về tài sản",
          "cost": "980.000 đồng/hồ sơ/thửa/GCN"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp mới)",
          "service": "Cấp GCN đối với cả đất và tài sản",
          "cost": "1.250.000 đồng/GCN"
        }
      ],
      "le_phi": "* Cấp giấy chứng nhận quyền sử dụng đất:\n- Đối với hộ gia đình, cá nhân tại các phường của thành phố Long Khánh và Biên Hòa: 30.000 đồng/giấy.\n- Đối với hộ gia đình, cá nhân tại các xã, thị trấn của các huyện và các xã của thành phố Long Khánh và Biên Hòa: 15.000 đồng/giấy.\n* Cấp giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất:\n- Đối với hộ gia đình, cá nhân tại các phường của thành phố Long Khánh và Biên Hòa: 120.000 đồng/giấy.\n- Đối với hộ gia đình, cá nhân tại các xã, thị trấn của các huyện và các xã của thành phố Long Khánh và Biên Hòa: 60.000 đồng/giấy.",
      "exemption": "Miễn giảm 100% theo Nghị quyết số 21/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai."
    },
    "legalBasis": "(1) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ quy định về phân định thẩm quyền của chính quyền địa phương 02 cấp, phân quyền, phân cấp trong lĩnh vực đất đai.\n(2) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ quy định về việc thực hiện thủ tục hành chính theo cơ chế một cửa, một cửa liên thông tại Bộ phận Một cửa và Cổng Dịch vụ công quốc gia.\n(3) Nghị quyết 13/2015/NQ-HĐND ngày 14/12/2015 của HĐND tỉnh Bình Phước.\n(4) Nghị quyết số 10/2019/NQ-HĐND ngày 05/7/2019 của HĐND tỉnh.\n(5) Quyết định 19/2021/QĐ-UBND ngày 10/6/2021 của UBND tỉnh Bình Phước.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đăng ký đất đai, tài sản gắn liền với đất theo Mẫu số 15 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Một trong các loại giấy tờ về quyền sử dụng đất (nếu có) theo quy định tại Điều 137 của Luật Đất đai.",
      "Một trong các giấy tờ về quyền sở hữu tài sản gắn liền với đất (nếu có).",
      "Chứng từ thực hiện nghĩa vụ tài chính; giấy tờ liên quan đến việc miễn, giảm nghĩa vụ tài chính về đất đai, tài sản gắn liền với đất (nếu có)."
    ]
  },
  {
    "id": "1.013979",
    "name": "Tặng cho quyền sử dụng đất cho Nhà nước hoặc cộng đồng dân cư hoặc mở rộng đường giao thông đối với trường hợp thửa đất chưa được cấp Giấy chứng nhận",
    "level": "Xã",
    "status": "Mới",
    "processingTime": "Không quá 10 ngày làm việc",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính cấp xã\nb) Nộp thông qua dịch vụ bưu chính công ích\nc) Nộp trên công dịch vụ công quốc gia (Một phần)",
    "agency": "(1) Ủy ban nhân dân cấp xã\n(2) Cơ quan có chức năng quản lý đất đai cấp xã\n(3) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai",
    "fees": {
      "description": "Cơ quan chủ trì tiếp nhận giải quyết thủ tục hành chính có trách nhiệm xây dựng, dự toán bố trí kinh phí thực hiện việc đo đạc, chỉnh lý, cập nhật hồ sơ địa chính và cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất cho người sử dụng đất trình cơ quan có thẩm quyền phê duyệt theo quy định.",
      "details": [
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp mới)",
          "service": "Cấp GCN quyền sử dụng đất",
          "cost": "530.000 đồng/GCN"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp mới)",
          "service": "Cấp GCN về tài sản",
          "cost": "580.000 đồng/GCN"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Cấp mới)",
          "service": "Cấp GCN đối với cả đất và tài sản",
          "cost": "720.000 đồng/GCN"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Chỉnh lý)",
          "service": "Chứng nhận biến động về quyền sử dụng đất",
          "cost": "450.000 đồng/GCN"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Chỉnh lý)",
          "service": "Chứng nhận biến động về tài sản",
          "cost": "470.000 đồng/GCN"
        },
        {
          "type": "Hồ sơ hộ gia đình, cá nhân (Chỉnh lý)",
          "service": "Chứng nhận biến động cả đất và tài sản",
          "cost": "590.000 đồng/GCN"
        }
      ],
      "le_phi": "* Cấp giấy chứng nhận quyền sử dụng đất:\n- Đối với hộ gia đình, cá nhân tại các phường của thành phố Long Khánh và Biên Hòa: 24.000 đồng/giấy.\n- Đối với hộ gia đình, cá nhân tại các xã, thị trấn của các huyện và các xã của thành phố Long Khánh và Biên Hòa: 12.000 đồng/giấy.\n* Cấp giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất:\n- Đối với hộ gia đình, cá nhân tại các phường của thành phố Long Khánh và Biên Hòa: 60.000 đồng/giấy.\n- Đối với hộ gia đình, cá nhân tại các xã, thị trấn của các huyện và các xã của thành phố Long Khánh và Biên Hòa: 30.000 đồng/giấy.",
      "exemption": "Miễn giảm 100% theo Nghị quyết số 21/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai."
    },
    "legalBasis": "(1) Luật Đất đai số 31/2024/QH15 ngày 18/01/2024 được sửa đổi bổ sung một số điều bởi Luật số 43/2024/QH15, Luật số 47/2024/QH15 và Luật số 58/2024/QH15 của Quốc hội.\n(2) Nghị định số 101/2024/NĐ-CP ngày 29/7/2024 của Chính phủ.\n(3) Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ.\n(4) Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ.\n(5) Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(6) Nghị quyết 22/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.\n(7) Nghị quyết số 10/2019/NQ-HĐND ngày 05/7/2019 của HĐND tỉnh.\n(8) Quyết định 19/2021/QĐ-UBND ngày 10/6/2021 của UBND tỉnh Bình Phước.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đăng ký biến động đất đai, tài sản gắn liền với đất theo Mẫu số 18 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Văn bản tặng cho quyền sử dụng đất."
    ]
  },
  {
    "id": "1.013965",
    "name": "Sử dụng đất kết hợp đa mục đích, gia hạn phương án sử dụng đất kết hợp đa mục đích",
    "level": "Xã",
    "status": "Mới",
    "processingTime": "- Thời gian thực hiện thủ tục phê duyệt phương án sử dụng đất kết hợp không quá 15 ngày. Đối với các xã miền núi, hải đảo, vùng sâu, vùng xa, vùng có điều kiện kinh tế - xã hội khó khăn, vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn thì thời gian thực hiện không quá 25 ngày.\n- Thời gian gia hạn phương án sử dụng đất kết hợp là không quá 07 ngày làm việc. Đối với các xã miền núi, biên giới, đảo, vùng có điều kiện kinh tế - xã hội khó khăn, vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn thì thời gian thực hiện không quá 17 ngày làm việc.",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công hoặc Ủy ban nhân dân cấp xã\nb) Nộp thông qua dịch vụ bưu chính công ích\nc) Nộp trực tuyến trên Cổng dịch vụ công (Một phần)",
    "agency": "Chủ tịch Ủy ban nhân dân cấp xã. Cơ quan có chức năng quản lý đất đai cấp xã",
    "fees": {
      "description": null,
      "details": [],
      "le_phi": "Không có",
      "exemption": null
    },
    "legalBasis": "- Luật Đất đai số 31/2024/QH15 ngày 18/01/2024 được sửa đổi, bổ sung một số điều bởi Luật số 43/2024/QH15, Luật số 47/2024/QH15 và Luật số 58/2024/QH15.\n- Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ.\n- Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn đề nghị sử dụng đất kết hợp đa mục đích theo Mẫu số 13 ban hành kèm theo Nghị định 151/2025/NĐ-CP.",
      "Phương án sử dụng đất kết hợp đa mục đích.",
      "Bản gốc Giấy chứng nhận đã cấp hoặc một trong các loại giấy tờ về quyền sử dụng đất theo quy định (nếu có)."
    ]
  },
  {
    "id": "1.013967",
    "name": "Giải quyết tranh chấp đất đai thuộc thẩm quyền của Chủ tịch Ủy ban nhân dân cấp xã",
    "level": "Xã",
    "status": "Mới",
    "processingTime": "Không quá 45 ngày kể từ ngày thụ lý đơn yêu cầu giải quyết tranh chấp đất đai. Đối với các xã miền núi, biên giới, đảo, vùng có điều kiện kinh tế - xã hội khó khăn, vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn không quá 60 ngày.",
    "location": "a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công hoặc Ủy ban nhân dân cấp xã\nb) Nộp thông qua dịch vụ bưu chính công ích\nc) Nộp trực tuyến trên Cổng dịch vụ công (Một phần)",
    "agency": "Chủ tịch UBND cấp xã hoặc tương đương. Các phòng ban chuyên môn của cấp xã",
    "fees": {
      "description": null,
      "details": [],
      "le_phi": "Theo quy định của Luật phí và lệ phí và các văn bản quy phạm pháp luật hướng dẫn Luật phí và lệ phí.",
      "exemption": null
    },
    "legalBasis": "- Luật Đất đai ngày 18/01/2024 được sửa đổi, bổ sung một số điều tại Luật số 43/2024/QH15, Luật số 47/2024/QH15 và Luật số 58/2024/QH15.\n- Nghị định số 118/2025/NĐ-CP ngày 09/6/2025 của Chính phủ.\n- Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ.\n- Nghị quyết 13/2015/NQ-HĐND ngày 14/12/2015 thông qua quy định mức thu, quản lý, sử dụng phí và lệ phí trên địa bàn tỉnh Bình Phước.",
    "notes": "Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23 tháng 6 năm 2025 của Bộ Nông nghiệp và Môi trường.",
    "requiredDocs": [
      "Đơn yêu cầu giải quyết tranh chấp đất đai.",
      "Biên bản hòa giải tại Ủy ban nhân dân cấp xã (nếu có).",
      "Các giấy tờ, tài liệu chứng minh về nguồn gốc, quá trình sử dụng đất và các tài liệu liên quan khác."
    ]
  },
    {
            id: '99.001',
            name: 'Đăng ký thế chấp quyền sử dụng đất, tài sản gắn liền với đất',
            level: 'Tỉnh',
            status: 'Mới',
            processingTime: 'Không quá 03 ngày làm việc (05 ngày làm việc nếu cần xác minh)',
            location: 'Bộ phận Một cửa hoặc Văn phòng đăng ký đất đai hoặc Chi nhánh Văn phòng đăng ký đất đai.',
            agency: 'Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai',
            fees: {
                description: 'Mức phí đăng ký giao dịch bảo đảm bằng quyền sử dụng đất và tài sản gắn liền với đất trên địa bàn tỉnh Đồng Nai được quy định chi tiết tại Nghị quyết số 23/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai. Mức thu áp dụng cho hình thức nộp trực tiếp như sau:',
                details: [
                    { type: 'Hộ gia đình, cá nhân', service: 'Đăng ký thế chấp quyền sử dụng đất', cost: '280.000 VNĐ/Hồ sơ/Thửa/GCN' },
                    { type: 'Hộ gia đình, cá nhân', service: 'Đăng ký thế chấp tài sản gắn liền với đất', cost: '330.000 VNĐ/Hồ sơ/Thửa/GCN' },
                    { type: 'Hộ gia đình, cá nhân', service: 'Đăng ký thế chấp đất và tài sản gắn liền với đất', cost: '410.000 VNĐ/Hồ sơ/Thửa/GCN' },
                    { type: 'Tổ chức', service: 'Đăng ký thế chấp quyền sử dụng đất', cost: '590.000 VNĐ/Hồ sơ/Thửa/GCN' },
                    { type: 'Tổ chức', service: 'Đăng ký thế chấp tài sản gắn liền với đất', cost: '580.000 VNĐ/Hồ sơ/Thửa/GCN' },
                    { type: 'Tổ chức', service: 'Đăng ký thế chấp đất và tài sản gắn liền với đất', cost: '760.000 VNĐ/Hồ sơ/Thửa/GCN' },
                ],
                le_phi: "Không quy định lệ phí riêng, chi phí đã bao gồm trong mức phí.",
                exemption: 'Miễn nộp phí đối với Hộ nghèo và cận nghèo theo chuẩn của tỉnh, Người cao tuổi, Người khuyết tật, Người có công với cách mạng theo Nghị quyết số 23/2024/NQ-HĐND. Mức phí nộp hồ sơ trực tuyến sẽ thấp hơn so với nộp trực tiếp. Đối với hồ sơ có nhiều giấy chứng nhận, từ giấy chứng nhận thứ hai trở đi, phí sẽ tăng thêm 50.000 đồng/GCN.'
            },
            legalBasis: 'Nghị định số 99/2022/NĐ-CP ngày 29/11/2022 về đăng ký biện pháp bảo đảm; Nghị quyết số 23/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.',
            notes: 'Thủ tục mới được bổ sung dựa trên Nghị định số 99/2022/NĐ-CP và Nghị quyết số 23/2024/NQ-HĐND.',
            requiredDocs: [
                'Đơn yêu cầu đăng ký theo Mẫu số 01/ĐK (Phụ lục ban hành kèm theo Nghị định 99/2022/NĐ-CP).',
                'Hợp đồng thế chấp quyền sử dụng đất, tài sản gắn liền với đất.',
                'Bản gốc Giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản khác gắn liền với đất.',
                'Giấy tờ chứng minh tư cách pháp lý của bên thế chấp và bên nhận thế chấp (CMND/CCCD đối với cá nhân, Giấy ĐKKD đối với tổ chức).'
            ]
        },
        {
            id: '99.002',
            name: 'Đăng ký thay đổi nội dung đăng ký thế chấp quyền sử dụng đất, tài sản gắn liền với đất',
            level: 'Tỉnh',
            status: 'Mới',
            processingTime: 'Không quá 03 ngày làm việc (05 ngày làm việc nếu cần xác minh)',
            location: 'Bộ phận Một cửa hoặc Văn phòng đăng ký đất đai hoặc Chi nhánh Văn phòng đăng ký đất đai.',
            agency: 'Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai',
            fees: {
                description: 'Mức phí đăng ký giao dịch bảo đảm bằng quyền sử dụng đất và tài sản gắn liền với đất trên địa bàn tỉnh Đồng Nai được quy định chi tiết tại Nghị quyết số 23/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai. Mức thu áp dụng cho hình thức nộp trực tiếp như sau:',
                details: [
                    { type: 'Hộ gia đình, cá nhân', service: 'Đăng ký thay đổi nội dung thế chấp', cost: '280.000 - 410.000 VNĐ/Hồ sơ/Thửa/GCN' },
                    { type: 'Tổ chức', service: 'Đăng ký thay đổi nội dung thế chấp', cost: '580.000 - 760.000 VNĐ/Hồ sơ/Thửa/GCN' },
                ],
                le_phi: "Không quy định lệ phí riêng, chi phí đã bao gồm trong mức phí.",
                exemption: 'Miễn nộp phí đối với Hộ nghèo và cận nghèo theo chuẩn của tỉnh, Người cao tuổi, Người khuyết tật, Người có công với cách mạng theo Nghị quyết số 23/2024/NQ-HĐND. Mức phí nộp hồ sơ trực tuyến sẽ thấp hơn so với nộp trực tiếp. Đối với hồ sơ có nhiều giấy chứng nhận, từ giấy chứng nhận thứ hai trở đi, phí sẽ tăng thêm 50.000 đồng/GCN.'
            },
            legalBasis: 'Nghị định số 99/2022/NĐ-CP ngày 29/11/2022 về đăng ký biện pháp bảo đảm; Nghị quyết số 23/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.',
            notes: 'Thủ tục mới được bổ sung dựa trên Nghị định số 99/2022/NĐ-CP và Nghị quyết số 23/2024/NQ-HĐND.',
            requiredDocs: [
                'Đơn yêu cầu đăng ký thay đổi theo Mẫu số 03/ĐK (Phụ lục ban hành kèm theo Nghị định 99/2022/NĐ-CP).',
                'Văn bản thỏa thuận về việc thay đổi nội dung thế chấp.',
                'Bản gốc Giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản khác gắn liền với đất.',
                'Giấy tờ chứng minh tư cách pháp lý của bên thế chấp và bên nhận thế chấp (nếu có thay đổi).'
            ]
        },
        {
            id: '99.003',
            name: 'Xóa đăng ký thế chấp quyền sử dụng đất, tài sản gắn liền với đất',
            level: 'Tỉnh',
            status: 'Mới',
            processingTime: 'Không quá 03 ngày làm việc (05 ngày làm việc nếu cần xác minh)',
            location: 'Bộ phận Một cửa hoặc Văn phòng đăng ký đất đai hoặc Chi nhánh Văn phòng đăng ký đất đai.',
            agency: 'Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai',
            fees: {
                description: 'Mức phí đăng ký giao dịch bảo đảm bằng quyền sử dụng đất và tài sản gắn liền với đất trên địa bàn tỉnh Đồng Nai được quy định chi tiết tại Nghị quyết số 23/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai. Mức thu áp dụng cho hình thức nộp trực tiếp như sau:',
                details: [
                    { type: 'Hộ gia đình, cá nhân', service: 'Xóa đăng ký thế chấp', cost: '280.000 - 410.000 VNĐ/Hồ sơ/Thửa/GCN' },
                    { type: 'Tổ chức', service: 'Xóa đăng ký thế chấp', cost: '580.000 - 750.000 VNĐ/Hồ sơ/Thửa/GCN' },
                ],
                le_phi: "Không quy định lệ phí riêng, chi phí đã bao gồm trong mức phí.",
                exemption: 'Miễn nộp phí đối với Hộ nghèo và cận nghèo theo chuẩn của tỉnh, Người cao tuổi, Người khuyết tật, Người có công với cách mạng theo Nghị quyết số 23/2024/NQ-HĐND. Mức phí nộp hồ sơ trực tuyến sẽ thấp hơn so với nộp trực tiếp. Đối với hồ sơ có nhiều giấy chứng nhận, từ giấy chứng nhận thứ hai trở đi, phí sẽ tăng thêm 50.000 đồng/GCN.'
            },
            legalBasis: 'Nghị định số 99/2022/NĐ-CP ngày 29/11/2022 về đăng ký biện pháp bảo đảm; Nghị quyết số 23/2024/NQ-HĐND ngày 29/11/2024 của Hội đồng nhân dân tỉnh Đồng Nai.',
            notes: 'Thủ tục mới được bổ sung dựa trên Nghị định số 99/2022/NĐ-CP và Nghị quyết số 23/2024/NQ-HĐND.',
            requiredDocs: [
                'Đơn yêu cầu xóa đăng ký theo Mẫu số 04/ĐK (Phụ lục ban hành kèm theo Nghị định 99/2022/NĐ-CP).',
                'Văn bản xác nhận hoàn thành nghĩa vụ được bảo đảm hoặc văn bản đồng ý xóa đăng ký của bên nhận thế chấp.',
                'Bản gốc Giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản khác gắn liền với đất (nếu có).'
            ]
        }
    ];

    // --- DOM ELEMENT SELECTORS ---
    const searchInput = document.getElementById('search-input');
    const levelFilter = document.getElementById('level-filter');
    const statusFilter = document.getElementById('status-filter');
    const procedureListContainer = document.getElementById('procedure-list');
    
    // Desktop and Mobile containers for details
    const detailsWrapper = document.getElementById('details-wrapper'); // For desktop
    const detailsModalOverlay = document.getElementById('details-modal-overlay'); // For mobile
    const detailsContentWrapper = document.getElementById('details-content-wrapper'); // For mobile

    let activeDetailsContainer = null; // To hold the current container (desktop or mobile)

    // --- TEMPLATES ---
    const placeholderTemplate = `
        <div id="details-placeholder" class="h-full flex flex-col items-center justify-center text-center p-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-slate-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            <h3 class="text-lg font-semibold text-slate-700">Chọn một thủ tục để xem chi tiết</h3>
            <p class="text-sm text-slate-500 mt-1">Thông tin chi tiết, hồ sơ và lệ phí sẽ được hiển thị tại đây.</p>
        </div>`;

    const detailsTemplate = `
        <div id="details-content" class="bg-white rounded-t-2xl lg:rounded-xl h-full flex flex-col">
            <div class="p-4 md:p-5 border-b border-slate-200 shrink-0 flex items-center justify-between">
                 <h3 id="details-title" class="flex-1 text-base md:text-lg font-bold text-slate-800 leading-tight pr-4"></h3>
                 <button id="back-to-list-btn" class="lg:hidden flex items-center justify-center h-8 w-8 text-sm font-medium text-slate-600 hover:text-blue-600 rounded-full hover:bg-slate-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                </button>
            </div>
            <div class="overflow-y-auto grow custom-scrollbar">
                <div class="border-b border-slate-200 px-4 md:px-6 sticky top-0 bg-white/80 backdrop-blur-sm z-10">
                    <nav class="flex -mb-px space-x-6" aria-label="Tabs">
                        <button class="details-tab whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm" data-tab="details">Chi tiết</button>
                        <button class="details-tab whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm" data-tab="documents">Hồ sơ</button>
                        <button class="details-tab whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm" data-tab="fees">Phí & Lệ phí</button>
                    </nav>
                </div>
                <div class="p-4 md:p-6">
                    <div id="tab-content-details" class="details-tab-pane"></div>
                    <div id="tab-content-documents" class="details-tab-pane hidden"></div>
                    <div id="tab-content-fees" class="details-tab-pane hidden"></div>
                </div>
            </div>
        </div>`;


    // --- HELPER FUNCTIONS ---

    function getStatusClass(status) {
        const statusMap = {
            'Sửa đổi': 'status-suadoi', 'Thay thế': 'status-thaythe',
            'Giữ nguyên': 'status-giunguyen', 'Bãi bỏ': 'status-baibo', 'Mới': 'status-moi'
        };
        return statusMap[status] || 'bg-slate-100 text-slate-800';
    }

    // --- CORE LOGIC ---

    function renderProcedureList(proceduresToRender) {
        procedureListContainer.innerHTML = '';
        if (proceduresToRender.length === 0) {
            procedureListContainer.innerHTML = `<div class="text-center text-slate-500 p-8">Không tìm thấy kết quả.</div>`;
            return;
        }

        proceduresToRender.forEach(p => {
            const listItem = document.createElement('button');
            listItem.className = 'w-full text-left p-4 rounded-lg border border-slate-200 bg-white hover:border-blue-500 hover:bg-slate-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400';
            listItem.dataset.id = p.id;
            listItem.innerHTML = `
                <div class="flex justify-between items-start mb-2 gap-2">
                    <p class="text-xs font-semibold text-slate-500">${p.id}</p>
                    <span class="card-badge ${getStatusClass(p.status)} shrink-0">${p.status}</span>
                </div>
                <h4 class="font-semibold text-slate-800 text-sm">${p.name}</h4>
            `;
            listItem.addEventListener('click', () => {
                displayProcedureDetails(p.id);
                document.querySelectorAll('#procedure-list button').forEach(btn => btn.classList.remove('active-procedure'));
                listItem.classList.add('active-procedure');
            });
            procedureListContainer.appendChild(listItem);
        });
    }

    function displayProcedureDetails(id) {
        const procedure = procedures.find(p => p.id === id);
        if (!procedure) return;

        // Determine which container to use based on screen size
        activeDetailsContainer = window.innerWidth < 1024 ? detailsContentWrapper : detailsWrapper;
        
        // Inject the details template
        activeDetailsContainer.innerHTML = detailsTemplate;
        
        // Populate the injected template
        activeDetailsContainer.querySelector('#details-title').textContent = procedure.name;

        // Populate Details Tab
        activeDetailsContainer.querySelector('#tab-content-details').innerHTML = `
            <div class="space-y-6 text-sm">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    <div><p class="font-semibold text-slate-600">Mã thủ tục</p><p class="text-slate-800 font-medium">${procedure.id}</p></div>
                    <div><p class="font-semibold text-slate-600">Cấp thực hiện</p><p class="text-slate-800 font-medium">${procedure.level || 'N/A'}</p></div>
                    <div class="col-span-1 sm:col-span-2"><p class="font-semibold text-slate-600">Thời hạn giải quyết</p><p class="text-slate-800 font-medium whitespace-pre-wrap">${procedure.processingTime || 'Không quy định'}</p></div>
                </div>
                <div class="border-t border-slate-200 pt-4">
                    <div><p class="font-semibold text-slate-600 mb-1">Địa điểm thực hiện</p><p class="leading-relaxed whitespace-pre-wrap">${procedure.location || 'Không quy định'}</p></div>
                </div>
                 <div class="border-t border-slate-200 pt-4">
                    <div><p class="font-semibold text-slate-600 mb-1">Cơ quan thực hiện</p><p class="leading-relaxed whitespace-pre-wrap">${procedure.agency || 'Không quy định'}</p></div>
                </div>
                ${procedure.notes ? `<div class="bg-slate-50 p-4 rounded-lg border border-slate-200"><p class="font-semibold text-slate-700 mb-1">Ghi chú</p><p class="leading-relaxed text-slate-600">${procedure.notes}</p></div>` : ''}
                ${procedure.legalBasis ? `<div class="border-t border-slate-200 pt-4"><p class="font-semibold text-slate-600 mb-1">Căn cứ pháp lý</p><p class="text-xs leading-relaxed text-slate-500 whitespace-pre-wrap">${procedure.legalBasis}</p></div>` : ''}
            </div>`;

        // Populate Documents Tab
        const docsHtml = procedure.requiredDocs && procedure.requiredDocs.length > 0
            ? `<ul class="list-disc list-inside space-y-3 text-sm leading-relaxed text-slate-700">
                ${procedure.requiredDocs.map(doc => `<li>${doc}</li>`).join('')}
            </ul>`
            : '<p class="text-slate-500">Không có yêu cầu về hồ sơ cho thủ tục này.</p>';
        activeDetailsContainer.querySelector('#tab-content-documents').innerHTML = docsHtml;
        
        // Populate Fees Tab
        const fees = procedure.fees;
        let feesHtml = '<p class="text-slate-500">Không có thông tin về phí hoặc lệ phí cho thủ tục này.</p>';
        if (fees) {
             feesHtml = `
                <div class="space-y-5 text-sm">
                    ${fees.description ? `<p class="leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200">${fees.description}</p>` : ''}
                    ${fees.details && fees.details.length > 0 ? `
                    <div class="overflow-x-auto rounded-lg border border-slate-200">
                        <table class="min-w-full text-sm">
                            <thead class="bg-slate-100">
                                <tr>
                                    <th class="p-3 text-left font-semibold text-slate-600">Đối tượng & Loại hình</th>
                                    <th class="p-3 text-left font-semibold text-slate-600">Dịch vụ</th>
                                    <th class="p-3 text-left font-semibold text-slate-600">Chi phí</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white">
                                ${fees.details.map(item => `
                                <tr class="border-t border-slate-200">
                                    <td class="p-3 align-top">${item.type}</td>
                                    <td class="p-3 align-top">${item.service}</td>
                                    <td class="p-3 align-top font-medium">${item.cost}</td>
                                </tr>`).join('')}
                            </tbody>
                        </table>
                    </div>` : ''}
                    <div>
                        <p class="font-semibold text-slate-600">Lệ phí</p>
                        <p class="whitespace-pre-wrap">${fees.le_phi || 'Không quy định.'}</p>
                    </div>
                    ${fees.exemption ? `
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-md">
                        <p class="font-semibold text-blue-800">Thông tin miễn giảm</p>
                        <p class="text-blue-700 leading-relaxed">${fees.exemption}</p>
                    </div>` : ''}
                </div>`;
        }
        activeDetailsContainer.querySelector('#tab-content-fees').innerHTML = feesHtml;

        // Add event listeners for the newly created tabs and close button
        activeDetailsContainer.querySelectorAll('.details-tab').forEach(tab => {
            tab.addEventListener('click', () => switchTab(tab.dataset.tab, activeDetailsContainer));
        });
        const closeBtn = activeDetailsContainer.querySelector('#back-to-list-btn');
        if(closeBtn) closeBtn.addEventListener('click', hideDetailsPanel);
        
        // Show the mobile modal if needed
        if (window.innerWidth < 1024) {
            detailsModalOverlay.classList.remove('hidden');
            setTimeout(() => detailsModalOverlay.classList.add('is-visible'), 10);
        }

        switchTab('details', activeDetailsContainer);
    }

    function switchTab(tabId, container) {
        container.querySelectorAll('.details-tab').forEach(tab => {
            const isSelected = tab.dataset.tab === tabId;
            tab.classList.toggle('border-blue-500', isSelected);
            tab.classList.toggle('text-blue-600', isSelected);
            tab.classList.toggle('border-transparent', !isSelected);
            tab.classList.toggle('text-slate-500', !isSelected);
            tab.classList.toggle('hover:text-slate-700', !isSelected);
            tab.classList.toggle('hover:border-slate-300', !isSelected);
        });
        container.querySelectorAll('.details-tab-pane').forEach(pane => {
            pane.classList.toggle('hidden', pane.id !== `tab-content-${tabId}`);
        });
    }
    
    function hideDetailsPanel() {
        detailsModalOverlay.classList.remove('is-visible');
        setTimeout(() => {
            detailsModalOverlay.classList.add('hidden');
            detailsContentWrapper.innerHTML = ''; // Clear content after hiding
        }, 300);
        document.querySelectorAll('#procedure-list button').forEach(btn => btn.classList.remove('active-procedure'));
    }

    function showPlaceholder() {
        detailsWrapper.innerHTML = placeholderTemplate;
    }

    function filterProcedures() {
        const level = levelFilter.value;
        const status = statusFilter.value;
        const searchTerm = searchInput.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        const filtered = procedures.filter(p => {
            const nameNormalized = p.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            const idNormalized = p.id.toLowerCase();
            
            const levelMatch = level === 'all' || p.level === level;
            const statusMatch = status === 'all' || p.status === status;
            const searchMatch = searchTerm === '' || nameNormalized.includes(searchTerm) || idNormalized.includes(searchTerm);
            
            return levelMatch && statusMatch && searchMatch;
        });
        renderProcedureList(filtered);
        if (window.innerWidth >= 1024) {
            showPlaceholder();
        }
    }

    // --- INITIALIZATION & EVENT LISTENERS ---

    [searchInput, levelFilter, statusFilter].forEach(el => {
        el.addEventListener('input', filterProcedures);
        el.addEventListener('change', filterProcedures);
    });
    
    detailsModalOverlay.addEventListener('click', (e) => {
        if (e.target === detailsModalOverlay) {
            hideDetailsPanel();
        }
    });

    // Initialize statistic counters
    const statusIdMap = {
        'Sửa đổi': 'suadoi',
        'Thay thế': 'thaythe',
        'Giữ nguyên': 'giunguyen',
        'Bãi bỏ': 'baibo',
        'Mới': 'moi'
    };

    Object.keys(statusIdMap).forEach(status => {
        const count = procedures.filter(p => p.status === status).length;
        const elementId = `count-${statusIdMap[status]}`;
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = count;
        }
    });
    
    // Initial render
    filterProcedures();
});

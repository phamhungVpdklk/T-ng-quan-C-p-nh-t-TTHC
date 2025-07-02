// This file contains all the data and logic for the new app-like layout.
// Make sure this file is in the same directory as the HTML file.

document.addEventListener('DOMContentLoaded', function() {
    
    // --- DATA STORE (FULL DATASET) ---
    const procedures = [
        {
            id: '1.1.012756',
            name: 'Đăng ký đất đai lần đầu đối với trường hợp được Nhà nước giao đất để quản lý',
            level: 'Tỉnh',
            status: 'Sửa đổi',
            processingTime: 'Không quá 17 ngày làm việc',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ Hành chính công tỉnh, xã, phường;<br>b) Nộp thông qua dịch vụ bưu chính;<br>c) Nộp trên Cổng Dịch vụ công quốc gia (Toàn trình).',
            agency: 'Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai',
            fees: {
                description: 'Giá dịch vụ và lệ phí được áp dụng theo quy định tại Phụ lục ban hành kèm theo Quyết định 2228/QĐ-UBND. Mức giá cụ thể như sau:',
                details: [
                    { type: 'Tổ chức (cấp mới)', service: 'Đối với đất', cost: '1.622.000 VNĐ/giấy' },
                    { type: 'Tổ chức (cấp mới)', service: 'Đối với tài sản', cost: '1.591.000 VNĐ/giấy' },
                    { type: 'Tổ chức (cấp mới)', service: 'Đối với cả đất và tài sản', cost: '2.082.000 VNĐ/giấy' },
                    { type: 'Tổ chức (chỉnh lý)', service: 'Đối với đất', cost: '1.349.000 VNĐ/giấy' },
                    { type: 'Tổ chức (chỉnh lý)', service: 'Đối với tài sản', cost: '1.346.000 VNĐ/giấy' },
                    { type: 'Tổ chức (chỉnh lý)', service: 'Đối với cả đất và tài sản', cost: '1.732.000 VNĐ/giấy' },
                    { type: 'Cá nhân (cấp mới)', service: 'Đối với đất', cost: '923.000 VNĐ/giấy' },
                    { type: 'Cá nhân (cấp mới)', service: 'Đối với tài sản', cost: '1.062.000 VNĐ/giấy' },
                    { type: 'Cá nhân (cấp mới)', service: 'Đối với cả đất và tài sản', cost: '1.351.000 VNĐ/giấy' },
                    { type: 'Cá nhân (chỉnh lý)', service: 'Đối với đất', cost: '570.000 VNĐ/giấy' },
                    { type: 'Cá nhân (chỉnh lý)', service: 'Đối với tài sản', cost: '706.000 VNĐ/giấy' },
                    { type: 'Cá nhân (chỉnh lý)', service: 'Đối với cả đất và tài sản', cost: '860.000 VNĐ/giấy' },
                ],
                le_phi: "100.000 VNĐ/giấy (tổ chức); 25.000 VNĐ/giấy (cá nhân tại phường thuộc thị xã, thị trấn thuộc huyện).",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 101/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 19/2021/QĐ-UBND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Đơn đăng ký đất đai, tài sản gắn liền với đất theo Mẫu số 15 ban hành kèm theo Nghị định 151/2025/NĐ-CP.',
                'Báo cáo kết quả rà soát hiện trạng sử dụng đất theo Mẫu số 15d ban hành kèm theo Nghị định 151/2025/NĐ-CP (đối với người được giao quản lý đất quy định tại khoản 1, 2 và 3 Điều 7 Luật Đất đai).'
            ]
        },
        {
            id: '1.012766',
            name: 'Xóa đăng ký thuê, cho thuê lại quyền sử dụng đất trong dự án xây dựng kinh doanh kết cấu hạ tầng',
            level: 'Tỉnh',
            status: 'Sửa đổi',
            processingTime: 'Không quá 03 ngày làm việc',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường;<br>b) Nộp thông qua dịch vụ bưu chính;<br>c) Nộp trên Cổng Dịch vụ công quốc gia (Một phần).',
            agency: 'Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai',
            fees: {
                description: 'Giá dịch vụ và lệ phí được áp dụng theo quy định tại Phụ lục ban hành kèm theo Quyết định 2228/QĐ-UBND. Mức giá cụ thể như sau:',
                details: [
                    { type: 'Tổ chức (cấp mới)', service: 'Đối với đất', cost: '1.622.000 VNĐ/giấy' },
                    { type: 'Tổ chức (cấp mới)', service: 'Đối với tài sản', cost: '1.591.000 VNĐ/giấy' },
                    { type: 'Tổ chức (cấp mới)', service: 'Đối với cả đất và tài sản', cost: '2.082.000 VNĐ/giấy' },
                    { type: 'Tổ chức (chỉnh lý)', service: 'Đối với đất', cost: '1.349.000 VNĐ/giấy' },
                    { type: 'Tổ chức (chỉnh lý)', service: 'Đối với tài sản', cost: '1.346.000 VNĐ/giấy' },
                    { type: 'Tổ chức (chỉnh lý)', service: 'Đối với cả đất và tài sản', cost: '1.732.000 VNĐ/giấy' },
                    { type: 'Cá nhân (cấp mới)', service: 'Đối với đất', cost: '923.000 VNĐ/giấy' },
                    { type: 'Cá nhân (cấp mới)', service: 'Đối với tài sản', cost: '1.062.000 VNĐ/giấy' },
                    { type: 'Cá nhân (cấp mới)', service: 'Đối với cả đất và tài sản', cost: '1.351.000 VNĐ/giấy' },
                    { type: 'Cá nhân (chỉnh lý)', service: 'Đối với đất', cost: '570.000 VNĐ/giấy' },
                    { type: 'Cá nhân (chỉnh lý)', service: 'Đối với tài sản', cost: '706.000 VNĐ/giấy' },
                    { type: 'Cá nhân (chỉnh lý)', service: 'Đối với cả đất và tài sản', cost: '860.000 VNĐ/giấy' },
                ],
                le_phi: "100.000 VNĐ/giấy (tổ chức); 25.000 VNĐ/giấy (cá nhân tại phường thuộc thị xã, thị trấn thuộc huyện).",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 101/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 19/2021/QĐ-UBND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Đơn đăng ký biến động đất đai, tài sản gắn liền với đất theo Mẫu số 18.',
                'Giấy chứng nhận đã cấp.',
                'Văn bản về việc xóa cho thuê, xóa cho thuê lại quyền sử dụng đất.'
            ]
        },
        {
            id: '1.012793',
            name: 'Đăng ký biến động đối với trường hợp thành viên của hộ gia đình hoặc cá nhân đang sử dụng đất thành lập doanh nghiệp tư nhân và sử dụng đất vào hoạt động sản xuất kinh doanh của doanh nghiệp',
            level: 'Tỉnh',
            status: 'Sửa đổi',
            processingTime: 'Không quá 08 ngày làm việc',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh hoặc Trung tâm Phục vụ hành chính công xã, phường nơi Chi nhánh Văn phòng Đăng ký đất đai đặt trụ sở;<br>b) Nộp thông qua dịch vụ bưu chính;<br>c) Nộp trên Cổng Dịch vụ công quốc gia (Một phần).',
            agency: 'Văn phòng Đăng ký đất đai',
            fees: {
                description: 'Giá dịch vụ và lệ phí được áp dụng theo quy định tại Phụ lục ban hành kèm theo Quyết định 2228/QĐ-UBND. Mức giá cụ thể như sau:',
                details: [
                    { type: 'Tổ chức (cấp mới)', service: 'Đối với đất', cost: '1.622.000 VNĐ/giấy' },
                    { type: 'Tổ chức (cấp mới)', service: 'Đối với tài sản', cost: '1.591.000 VNĐ/giấy' },
                    { type: 'Tổ chức (cấp mới)', service: 'Đối với cả đất và tài sản', cost: '2.082.000 VNĐ/giấy' },
                    { type: 'Tổ chức (chỉnh lý)', service: 'Đối với đất', cost: '1.408.000 VNĐ/giấy' },
                    { type: 'Tổ chức (chỉnh lý)', service: 'Đối với tài sản', cost: '1.397.000 VNĐ/giấy' },
                    { type: 'Tổ chức (chỉnh lý)', service: 'Đối với cả đất và tài sản', cost: '1.803.000 VNĐ/giấy' },
                ],
                le_phi: "100.000 VNĐ/giấy (tổ chức); 25.000 VNĐ/giấy (cá nhân tại phường thuộc thị xã, thị trấn thuộc huyện).",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 101/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 19/2021/QĐ-UBND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Giấy chứng nhận đăng ký doanh nghiệp.',
                'Văn bản thỏa thuận của các thành viên có chung quyền sử dụng đất đồng ý đưa quyền sử dụng đất vào doanh nghiệp (đã được công chứng hoặc chứng thực) đối với trường hợp quyền sử dụng đất của hộ gia đình.'
            ]
        },
        {
            id: '1.012781',
            name: 'Đăng ký, cấp Giấy chứng nhận đối với thửa đất có diện tích tăng thêm do thay đổi ranh giới so với Giấy chứng nhận đã cấp',
            level: 'Tỉnh',
            status: 'Sửa đổi',
            processingTime: 'Không quá 10 ngày làm việc (nếu GCN gốc đã có, phần tăng thêm do chuyển quyền một phần) hoặc không quá 20 ngày làm việc (nếu GCN gốc đã có, phần tăng thêm chưa được cấp GCN)',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường;<br>b) Nộp thông qua dịch vụ bưu chính;<br>c) Nộp trên Cổng Dịch vụ công quốc gia (Một phần).',
            agency: '(1) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai (2) Cơ quan thuế (nếu có)',
            fees: {
                description: 'Giá dịch vụ và lệ phí được áp dụng theo quy định tại Phụ lục ban hành kèm theo Quyết định 2228/QĐ-UBND. Mức giá cụ thể như sau:',
                details: [
                    { type: 'Cá nhân (cấp mới)', service: 'Đối với đất', cost: '1.949.000 VNĐ/giấy' },
                    { type: 'Cá nhân (cấp mới)', service: 'Đối với tài sản', cost: '1.970.000 VNĐ/giấy' },
                    { type: 'Cá nhân (cấp mới)', service: 'Đối với cả đất và tài sản', cost: '2.793.000 VNĐ/giấy' },
                    { type: 'Cá nhân (tăng thêm)', service: 'Đơn giá đối với mỗi thửa đất tăng', cost: '204.000 VNĐ/giấy' },
                ],
                le_phi: "25.000 VNĐ/giấy (đất); 100.000 VNĐ/giấy (cả đất và tài sản).",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 101/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 19/2021/QĐ-UBND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Giấy tờ về việc nhận chuyển quyền sử dụng đất của phần diện tích tăng thêm (đối với trường hợp tăng thêm do chuyển quyền).',
                'Giấy tờ chứng minh phần diện tích tăng thêm (nếu có).'
            ]
        },
        {
            id: '1.012782',
            name: 'Đăng ký, cấp Giấy chứng nhận đối với trường hợp cá nhân, hộ gia đình đã được cấp Giấy chứng nhận một phần diện tích vào loại đất ở trước ngày 01 tháng 7 năm 2004, phần diện tích còn lại của thửa đất chưa được cấp Giấy chứng nhận',
            level: 'Tỉnh',
            status: 'Sửa đổi',
            processingTime: 'Không quá 20 ngày làm việc (có nhu cầu xác định lại diện tích đất ở) hoặc không quá 15 ngày làm việc (không có nhu cầu xác định lại diện tích đất ở)',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường;<br>b) Nộp thông qua dịch vụ bưu chính;<br>c) Nộp trên Cổng Dịch vụ công quốc gia (Một phần).',
            agency: '(1) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai (3) Cơ quan thuế (nếu có)',
            fees: {
                description: 'Giá dịch vụ và lệ phí được áp dụng theo quy định tại Phụ lục ban hành kèm theo Quyết định 2228/QĐ-UBND. Mức giá cụ thể như sau:',
                details: [
                    { type: 'Cá nhân (cấp mới)', service: 'Đối với đất', cost: '923.000 VNĐ/giấy' },
                    { type: 'Cá nhân (cấp mới)', service: 'Đối với tài sản', cost: '1.062.000 VNĐ/giấy' },
                    { type: 'Cá nhân (cấp mới)', service: 'Đối với cả đất và tài sản', cost: '1.351.000 VNĐ/giấy' },
                ],
                le_phi: "25.000 VNĐ/giấy (đất); 100.000 VNĐ/giấy (cả đất và tài sản).",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 101/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 19/2021/QĐ-UBND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Đơn đăng ký biến động đất đai, tài sản gắn liền với đất theo Mẫu số 18.',
                'Giấy chứng nhận đã cấp.'
            ]
        },
        {
            id: '1.012783',
            name: 'Cấp đổi Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất',
            level: 'Tỉnh',
            status: 'Sửa đổi',
            processingTime: 'Không quá 05 ngày làm việc (thông thường) hoặc không quá 10 ngày làm việc (trường hợp đặc biệt) hoặc theo dự án (cấp đổi đồng loạt)',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường;<br>b) Nộp thông qua dịch vụ bưu chính;<br>c) Nộp trên Cổng Dịch vụ công quốc gia.',
            agency: '(1) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai (2) Cơ quan thuế (nếu có)',
            fees: {
                description: 'Giá dịch vụ và lệ phí được áp dụng theo quy định tại Phụ lục ban hành kèm theo Quyết định 2228/QĐ-UBND. Mức giá cụ thể như sau:',
                details: [
                    { type: 'Tách thửa', service: 'Đối với đất', cost: '838.000 VNĐ/giấy' },
                    { type: 'Tách thửa', service: 'Đối với tài sản', cost: '788.000 VNĐ/giấy' },
                    { type: 'Tách thửa', service: 'Đối với cả đất và tài sản', cost: '1.082.000 VNĐ/giấy' },
                    { type: 'Hợp thửa', service: 'Đối với đất', cost: '1.622.000 VNĐ/giấy' },
                    { type: 'Hợp thửa', service: 'Đối với tài sản', cost: '1.591.000 VNĐ/giấy' },
                    { type: 'Hợp thửa', service: 'Đối với cả đất và tài sản', cost: '2.082.000 VNĐ/giấy' },
                    { type: 'Ghi chú', service: 'Đơn giá đối với mỗi thửa đất (GCN) tăng thêm', cost: '251.000 VNĐ/giấy' },
                ],
                le_phi: "50.000 VNĐ/giấy.",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 101/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 19/2021/QĐ-UBND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Đơn đăng ký biến động đất đai, tài sản gắn liền với đất theo Mẫu số 18 và Giấy chứng nhận đã cấp.',
                'Mảnh trích đo bản đồ địa chính thửa đất (nếu có nhu cầu đo đạc lại).'
            ]
        },
        {
            id: '1.012784',
            name: 'Tách thửa hoặc hợp thửa đất',
            level: 'Tỉnh',
            status: 'Sửa đổi',
            processingTime: 'Không quá 12 ngày làm việc',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường;<br>b) Nộp thông qua dịch vụ bưu chính;<br>c) Nộp trên Cổng Dịch vụ công quốc gia (Một phần).',
            agency: 'Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai',
            fees: {
                description: 'Giá dịch vụ và lệ phí được áp dụng theo quy định tại Phụ lục ban hành kèm theo Quyết định 2228/QĐ-UBND. Mức giá cụ thể như sau:',
                details: [
                    { type: 'Tách thửa', service: 'Đối với đất', cost: '838.000 VNĐ/giấy' },
                    { type: 'Tách thửa', service: 'Đối với tài sản', cost: '788.000 VNĐ/giấy' },
                    { type: 'Tách thửa', service: 'Đối với cả đất và tài sản', cost: '1.082.000 VNĐ/giấy' },
                    { type: 'Ghi chú', service: 'Đơn giá đối với mỗi thửa đất (GCN) tăng thêm', cost: '251.000 VNĐ/giấy' },
                ],
                le_phi: "100.000 VNĐ/giấy.",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 101/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 19/2021/QĐ-UBND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Đơn đề nghị tách thửa đất, hợp thửa đất theo Mẫu số 21.',
                'Bản vẽ tách thửa đất, hợp thửa đất theo Mẫu số 22.',
                'Giấy chứng nhận đã cấp (bản gốc hoặc bản sao có công chứng, chứng thực).',
                'Các văn bản của cơ quan có thẩm quyền có thể hiện nội dung tách thửa đất, hợp thửa đất (nếu có).'
            ]
        },
        {
            id: '1.012786',
            name: 'Cấp lại Giấy chứng nhận do bị mất',
            level: 'Tỉnh',
            status: 'Sửa đổi',
            processingTime: 'Không quá 10 ngày làm việc (không tính thời gian niêm yết/đăng tin)',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường;<br>b) Nộp thông qua dịch vụ bưu chính;<br>c) Nộp trên Cổng Dịch vụ công quốc gia (Toàn trình).',
            agency: '(1) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai (2) Ủy ban nhân dân cấp xã',
            fees: {
                description: 'Giá dịch vụ và lệ phí được áp dụng theo quy định tại Phụ lục ban hành kèm theo Quyết định 2228/QĐ-UBND. Mức giá cụ thể như sau:',
                details: [
                    { type: 'Cấp lại GCN', service: 'Đối với đất', cost: '838.000 VNĐ/giấy' },
                    { type: 'Cấp lại GCN', service: 'Đối với tài sản', cost: '788.000 VNĐ/giấy' },
                    { type: 'Cấp lại GCN', service: 'Đối với cả đất và tài sản', cost: '1.082.000 VNĐ/giấy' },
                    { type: 'Ghi chú', service: 'Đơn giá đối với mỗi thửa đất (GCN) tăng thêm', cost: '251.000 VNĐ/giấy' },
                ],
                le_phi: "50.000 VNĐ/giấy.",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 101/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 19/2021/QĐ-UBND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Đơn đăng ký biến động đất đai, tài sản gắn liền với đất theo Mẫu số 18.',
                'Mảnh trích đo bản đồ địa chính thửa đất (nếu có nhu cầu đo đạc lại).'
            ]
        },
        {
            id: '1.012790',
            name: 'Đính chính Giấy chứng nhận đã cấp',
            level: 'Tỉnh',
            status: 'Sửa đổi',
            processingTime: 'Không quá 08 ngày làm việc',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường;<br>b) Nộp thông qua dịch vụ bưu chính;<br>c) Nộp trên Cổng Dịch vụ công quốc gia (Một phần).',
            agency: '(1) Cơ quan có chức năng quản lý đất đai cấp tỉnh. (2) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai',
            fees: {
                description: 'Giá dịch vụ và lệ phí được áp dụng theo quy định tại Phụ lục ban hành kèm theo Quyết định 2228/QĐ-UBND. Mức giá cụ thể như sau:',
                details: [
                    { type: 'Chỉnh lý GCN đã cấp', service: 'Đối với đất', cost: '1.348.000 VNĐ' },
                    { type: 'Chỉnh lý GCN đã cấp', service: 'Đối với tài sản', cost: '1.346.000 VNĐ/giấy' },
                    { type: 'Chỉnh lý GCN đã cấp', service: 'Đối với cả đất và tài sản', cost: '1.731.000 VNĐ/giấy' },
                ],
                le_phi: "25.000 VNĐ.",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024. Trường hợp đính chính Giấy chứng nhận mà nguyên nhân do cơ quan nhà nước thì không thu tiền.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 101/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 19/2021/QĐ-UBND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Đơn đăng ký biến động đất đai, tài sản gắn liền với đất theo Mẫu số 18.',
                'Bản gốc Giấy chứng nhận đã cấp.',
                'Giấy tờ chứng minh sai sót thông tin.'
            ]
        },
        {
            id: '1.012791',
            name: 'Thu hồi Giấy chứng nhận đã cấp không đúng quy định của pháp luật đất đai do người sử dụng đất, chủ sở hữu tài sản gắn liền với đất phát hiện và cấp lại Giấy chứng nhận sau khi thu hồi',
            level: 'Tỉnh',
            status: 'Sửa đổi',
            processingTime: 'Không quá 25 ngày làm việc (thu hồi GCN) hoặc không quá 20 ngày làm việc (đăng ký, cấp lại GCN sau thu hồi lần đầu)',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường;<br>b) Nộp thông qua dịch vụ bưu chính;<br>c) Nộp trên Cổng Dịch vụ công quốc gia (Một phần).',
            agency: '(1) Cơ quan có chức năng quản lý đất đai cấp tỉnh (2) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai (3) Cơ quan thuế',
            fees: {
                description: 'Đối với trường hợp do lỗi của người sử dụng đất: Thu phí, lệ phí, đơn giá theo thủ tục cấp lại Giấy chứng nhận sau khi thu hồi (thủ tục đã cấp Giấy chứng nhận trước đó). Đối với trường hợp do lỗi của cơ quan có thẩm quyền cấp Giấy chứng nhận: Không thu.',
                details: [],
                le_phi: "Theo quy định của Luật phí và lệ phí và các văn bản hướng dẫn.",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 101/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 19/2024/QĐ-UBND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Giấy chứng nhận đã cấp cho đơn vị, tổ chức thực hiện nhiệm vụ bồi thường, hỗ trợ, tái định cư theo quy định của pháp luật đất đai hoặc cơ quan có thẩm quyền quyết định thu hồi đất.'
            ]
        },
        {
            id: '1.012785',
            name: 'Đăng ký, cấp Giấy chứng nhận đối với trường hợp đã chuyển quyền sử dụng đất trước ngày 01 tháng 8 năm 2024 mà bên chuyển quyền đã được cấp Giấy chứng nhưng chưa thực hiện thủ tục chuyển quyền theo quy định',
            level: 'Tỉnh',
            status: 'Sửa đổi',
            processingTime: 'Không quá 08 ngày làm việc',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường;<br>b) Nộp thông qua dịch vụ bưu chính;<br>c) Nộp trên Cổng Dịch vụ công quốc gia.',
            agency: '(1) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai (2) Ủy ban nhân dân cấp xã (3) Cơ quan thuế',
            fees: {
                description: 'Giá dịch vụ và lệ phí được áp dụng theo quy định tại Phụ lục ban hành kèm theo Quyết định 2228/QĐ-UBND. Mức giá cụ thể như sau:',
                details: [
                    { type: 'Tổ chức (cấp mới)', service: 'Đối với đất', cost: '1.622.000 VNĐ/giấy' },
                    { type: 'Tổ chức (cấp mới)', service: 'Đối với tài sản', cost: '1.591.000 VNĐ/giấy' },
                    { type: 'Tổ chức (cấp mới)', service: 'Đối với cả đất và tài sản', cost: '2.082.000 VNĐ/giấy' },
                    { type: 'Tổ chức (chỉnh lý)', service: 'Đối với đất', cost: '1.403.000 VNĐ/giấy' },
                    { type: 'Tổ chức (chỉnh lý)', service: 'Đối với tài sản', cost: '1.397.000 VNĐ/giấy' },
                    { type: 'Tổ chức (chỉnh lý)', service: 'Đối với cả đất và tài sản', cost: '1.803.000 VNĐ/giấy' },
                ],
                le_phi: "100.000 VNĐ/giấy (cấp mới); 25.000 VNĐ/giấy (chỉnh lý).",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 101/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 19/2021/QĐ-UBND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Đơn đăng ký biến động đất đai, tài sản gắn liền với đất theo Mẫu số 18.',
                'Hợp đồng, văn bản về chuyển quyền sử dụng đất đã lập theo quy định (đối với trường hợp chỉ có hợp đồng hoặc văn bản về chuyển quyền sử dụng đất đã lập theo quy định nhưng bên chuyển quyền không trao Giấy chứng nhận cho bên nhận chuyển quyền).',
                'Bản gốc Giấy chứng nhận đã cấp, giấy tờ về việc chuyển quyền sử dụng đất có đủ chữ ký của bên chuyển quyền và bên nhận chuyển quyền (đối với trường hợp nhận chuyển quyền sử dụng đất nhưng không có hợp đồng, văn bản theo quy định).'
            ]
        },
        {
            id: '1.012787',
            name: 'Đăng ký, cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất cho người nhận chuyển nhượng quyền sử dụng đất, quyền sở hữu nhà ở, công trình xây dựng trong dự án bất động sản',
            level: 'Tỉnh',
            status: 'Sửa đổi',
            processingTime: 'Không quá 08 ngày làm việc',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường;<br>b) Nộp thông qua dịch vụ bưu chính;<br>c) Nộp trên Cổng Dịch vụ công quốc gia.',
            agency: '(1) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai (2) Cơ quan Thuế (nếu có)',
            fees: {
                description: 'Giá dịch vụ và lệ phí được áp dụng theo quy định tại Phụ lục ban hành kèm theo Quyết định 2228/QĐ-UBND. Mức giá cụ thể như sau:',
                details: [
                    { type: 'Tổ chức (cấp mới)', service: 'Đối với đất', cost: '1.622.000 VNĐ/giấy' },
                    { type: 'Tổ chức (cấp mới)', service: 'Đối với tài sản', cost: '1.591.000 VNĐ/giấy' },
                    { type: 'Tổ chức (cấp mới)', service: 'Đối với cả đất và tài sản', cost: '2.082.000 VNĐ/giấy' },
                    { type: 'Tổ chức (chỉnh lý)', service: 'Đối với đất', cost: '1.403.000 VNĐ/giấy' },
                    { type: 'Tổ chức (chỉnh lý)', service: 'Đối với tài sản', cost: '1.397.000 VNĐ/giấy' },
                    { type: 'Tổ chức (chỉnh lý)', service: 'Đối với cả đất và tài sản', cost: '1.803.000 VNĐ/giấy' },
                ],
                le_phi: "100.000 VNĐ/giấy (cấp mới); 25.000 VNĐ/giấy (chỉnh lý).",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 101/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 19/2021/QĐ-UBND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Văn bản về việc nhà ở, công trình xây dựng đã được nghiệm thu đưa vào khai thác, sử dụng (đối với nhà ở, công trình xây dựng).',
                'Văn bản về việc đủ điều kiện được chuyển nhượng cho cá nhân tự xây dựng nhà ở (đối với chuyển nhượng quyền sử dụng đất đã có hạ tầng kỹ thuật).',
                'Đơn đăng ký biến động đất đai, tài sản gắn liền với đất theo Mẫu số 18.',
                'Hợp đồng chuyển nhượng quyền sử dụng đất, quyền sở hữu nhà ở, công trình xây dựng.',
                'Biên bản bàn giao nhà, đất, công trình xây dựng.',
                'Giấy chứng nhận đã cấp cho chủ đầu tư dự án.',
                'Chứng từ chứng minh việc hoàn thành nghĩa vụ tài chính (nếu có).'
            ]
        },
        {
            id: '1.012789',
            name: 'Cung cấp thông tin, dữ liệu đất đai',
            level: 'Tỉnh',
            status: 'Sửa đổi',
            processingTime: 'Trong ngày làm việc (nếu có sẵn) hoặc không quá 10 ngày làm việc (nếu không có sẵn)',
            location: 'a) Nộp trên Cổng thông tin đất đai quốc gia, Cổng Dịch vụ công quốc gia;<br>b) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường hoặc gửi qua đường công văn, điện tín, qua dịch vụ bưu chính;<br>c) Nộp thông qua các phương tiện điện tử khác theo quy định của pháp luật (Toàn trình).',
            agency: '(1) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai (2) UBND cấp',
            fees: {
                description: 'Đối với trường hợp khai thác và sử dụng tài liệu đất đai từ hệ thống thông tin Quốc gia về đất đai: Thu theo quy định tại Thông tư số 56/2024/TT-BTC ngày 31/7/2024 của Bộ Tài chính. Đối với trường hợp còn lại: 300.000 đồng/hồ sơ, tài liệu (không bao gồm chi phí in ấn, sao chụp hồ sơ, tài liệu).',
                details: [],
                le_phi: "30.000 VNĐ.",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 101/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 13/2015/NQ-HĐND tỉnh Bình Phước; Thông tư số 56/2024/TT-BTC.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Phiếu yêu cầu cung cấp thông tin, dữ liệu đất đai theo Mẫu số 14.'
            ]
        },
        {
            id: '1.012821',
            name: 'Thẩm định, phê duyệt phương án sử dụng đất',
            level: 'Tỉnh',
            status: 'Sửa đổi',
            processingTime: 'Tùy thuộc từng bước, tổng thời gian có thể lên đến 128 ngày làm việc (bao gồm cả thời gian tăng thêm cho vùng khó khăn)',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh hoặc qua dịch vụ bưu chính;<br>b) Nộp trực tuyến: qua Cổng Dịch vụ công quốc gia (Một phần).',
            agency: 'Chủ tịch Ủy ban nhân dân cấp tỉnh; Cơ quan có chức năng quản lý đất đai cấp tỉnh',
            fees: {
                description: 'Phí thẩm định được quy định như sau:',
                details: [
                    { type: 'Phí thẩm định', service: 'Hồ sơ xin cấp quyền sử dụng đất để sản xuất, kinh doanh', cost: '4.000.000 VNĐ' },
                    { type: 'Phí thẩm định', service: 'Hồ sơ xin cấp quyền sử dụng đất để làm nhà ở', cost: '300.000 VNĐ' },
                ],
                le_phi: "Không quy định.",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 102/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP;',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Văn bản đề nghị thẩm định, phê duyệt phương án sử dụng đất theo Mẫu số 23.',
                'Phương án sử dụng đất.',
                'Giấy chứng nhận đã cấp (nếu có).'
            ]
        },
        {
            id: '1.012805',
            name: 'Giải quyết tranh chấp đất đai thuộc thẩm quyền của Chủ tịch Ủy ban nhân dân cấp tỉnh',
            level: 'Tỉnh',
            status: 'Sửa đổi',
            processingTime: 'Không quá 50 ngày làm việc (thông thường) hoặc không quá 60 ngày (đối với vùng khó khăn)',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh hoặc qua dịch vụ bưu chính;<br>b) Nộp trực tuyến: qua Cổng Dịch vụ công quốc gia (Một phần).',
            agency: 'Chủ tịch Ủy ban nhân dân cấp tỉnh; Các sở ngành có liên quan',
            fees: {
                description: 'Phí, lệ phí được áp dụng theo quy định của Luật phí và lệ phí và các văn bản quy phạm pháp luật hướng dẫn Luật phí và lệ phí.',
                details: [],
                le_phi: "Theo quy định của Luật phí và lệ phí và các văn bản hướng dẫn.",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 102/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Nghị quyết 13/2015/NQ-HĐND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Đơn yêu cầu giải quyết tranh chấp đất đai.',
                'Biên bản làm việc của các bên tranh chấp, biên bản kiểm tra hiện trạng tranh chấp, biên bản hòa giải (nếu có).',
                'Trích lục bản đồ, hồ sơ địa chính, dữ liệu ảnh viễn thám liên quan đến diện tích đất tranh chấp (nếu có) và các tài liệu làm chứng cứ.',
                'Báo cáo đề xuất và dự thảo quyết định giải quyết tranh chấp hoặc dự thảo quyết định công nhận hòa giải thành.'
            ]
        },
        {
            id: '1.013823',
            name: 'Giao đất, cho thuê đất, chuyển mục đích sử dụng đất',
            level: 'Tỉnh',
            status: 'Thay thế',
            processingTime: '15 ngày làm việc (25 ngày đối với vùng khó khăn)',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh;<br>b) Nộp thông qua dịch vụ bưu chính công ích;<br>c) Nộp trực tuyến (Một phần).',
            agency: 'UBND cấp tỉnh; Chủ tịch UBND cấp tỉnh; Cơ quan chuyên môn về nông nghiệp và môi trường cấp tỉnh; Văn phòng đăng ký đất đai; Cơ quan thuế.',
            fees: {
                description: 'Bao gồm Phí thẩm định và Lệ phí cấp Giấy chứng nhận.',
                details: [
                    { type: 'Phí thẩm định (Sản xuất, kinh doanh)', service: 'Giao đất, cho thuê đất', cost: '4.000.000 VNĐ' },
                    { type: 'Phí thẩm định (Nhà ở)', service: 'Giao đất, cho thuê đất', cost: '300.000 VNĐ' },
                ],
                le_phi: 'Đối với đất: 100.000 VNĐ/lần; Đối với đất và tài sản: 500.000 VNĐ/lần.',
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Luật Lâm nghiệp; Các Nghị định số 151/2025/NĐ-CP, 102/2024/NĐ-CP, 118/2025/NĐ-CP, 131/2025/NĐ-CP, 136/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025. Thủ tục này thay thế cho nhiều thủ tục cũ (1.012752, 1.012755, 1.012757, 1.012758, 1.012759, 1.012761, 1.012792).',
            requiredDocs: [
                'Đơn đề nghị giao đất/thuê đất/chuyển mục đích sử dụng đất/thuê đất và thuê rừng theo Mẫu số 01.',
                'Bản sao văn bản phê duyệt kết quả lựa chọn nhà đầu tư hoặc quyết định chấp thuận chủ trương đầu tư.',
                'Phương án sử dụng tầng đất mặt theo Mẫu số 26 (đối với trường hợp chuyển mục đích sử dụng đất chuyên trồng lúa).',
                'Một trong các loại giấy tờ về quyền sử dụng đất quy định tại Điều 137 Luật Đất đai hoặc quyết định giao đất, cho thuê đất, cho phép chuyển mục đích sử dụng đất của cơ quan nhà nước có thẩm quyền.'
            ]
        },
        {
            id: '1.013825',
            name: 'Chuyển hình thức giao đất, cho thuê đất',
            level: 'Tỉnh',
            status: 'Thay thế',
            processingTime: '15 ngày làm việc (25 ngày đối với vùng khó khăn)',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh;<br>b) Nộp thông qua dịch vụ bưu chính công ích;<br>c) Nộp trực tuyến (Một phần).',
            agency: 'Chủ tịch Ủy ban nhân dân cấp tỉnh; Cơ quan có chức năng quản lý đất đai cấp tỉnh.',
            fees: {
                description: 'Giá dịch vụ và lệ phí được áp dụng theo quy định tại Phụ lục ban hành kèm theo Quyết định 2228/QĐ-UBND. Mức giá cụ thể như sau:',
                details: [
                    { type: 'Phí thẩm định (Sản xuất, kinh doanh)', service: 'Giao đất, cho thuê đất', cost: '4.000.000 VNĐ' },
                    { type: 'Phí thẩm định (Nhà ở)', service: 'Giao đất, cho thuê đất', cost: '300.000 VNĐ' },
                    { type: 'Cấp mới GCN', service: 'Đối với đất', cost: '1.887.000 VNĐ/giấy' },
                    { type: 'Cấp mới GCN', service: 'Đối với tài sản', cost: '2.024.000 VNĐ/giấy' },
                    { type: 'Cấp mới GCN', service: 'Đối với cả đất và tài sản', cost: '2.717.000 VNĐ/giấy' },
                ],
                le_phi: "100.000 VNĐ/lần; 500.000 VNĐ/lần (đất và tài sản).",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Luật Lâm nghiệp; Các Nghị định số 151/2025/NĐ-CP, 102/2024/NĐ-CP, 118/2025/NĐ-CP, 131/2025/NĐ-CP, 136/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025. Thay thế cho 1.012760.',
            requiredDocs: [
                'Đơn đề nghị chuyển hình thức giao đất/cho thuê đất theo Mẫu số 02.',
                'Một trong các giấy tờ sau: Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất; giấy tờ quy định tại Điều 137 Luật Đất đai; Quyết định giao đất, cho thuê đất, cho phép chuyển mục đích sử dụng đất của cơ quan nhà nước có thẩm quyền.'
            ]
        },
        {
            id: '1.013826',
            name: 'Điều chỉnh quyết định giao đất, cho thuê đất, cho phép chuyển mục đích sử dụng đất do thay đổi căn cứ quyết định giao đất, cho thuê đất, cho phép chuyển mục đích sử dụng đất, điều chỉnh thời hạn sử dụng đất của dự án đầu tư',
            level: 'Tỉnh',
            status: 'Thay thế',
            processingTime: '05 ngày (điều chỉnh quyết định) hoặc 15 ngày (điều chỉnh thời hạn) (thông thường) hoặc 15/25 ngày (vùng khó khăn)',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh;<br>b) Nộp thông qua dịch vụ bưu chính công ích;<br>c) Nộp trực tuyến (Một phần).',
            agency: '(1) UBND cấp tỉnh (2) Chủ tịch UBND cấp tỉnh (3) Cơ quan chuyên môn về nông nghiệp và môi trường cấp tỉnh (4) Văn phòng đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai (5) Cơ quan thuế (nếu có).',
            fees: {
                description: 'Giá dịch vụ và lệ phí được áp dụng theo quy định tại Phụ lục ban hành kèm theo Quyết định 2228/QĐ-UBND. Mức giá cụ thể như sau:',
                details: [
                    { type: 'Phí thẩm định (Sản xuất, kinh doanh)', service: 'Giao đất, cho thuê đất', cost: '4.000.000 VNĐ' },
                    { type: 'Phí thẩm định (Nhà ở)', service: 'Giao đất, cho thuê đất', cost: '300.000 VNĐ' },
                    { type: 'Cấp mới GCN', service: 'Đối với đất', cost: '1.887.000 VNĐ/giấy' },
                    { type: 'Cấp mới GCN', service: 'Đối với tài sản', cost: '2.024.000 VNĐ/giấy' },
                    { type: 'Cấp mới GCN', service: 'Đối với cả đất và tài sản', cost: '2.717.000 VNĐ/giấy' },
                ],
                le_phi: "100.000 VNĐ/giấy.",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Luật Lâm nghiệp; Các Nghị định số 151/2025/NĐ-CP, 102/2024/NĐ-CP, 118/2025/NĐ-CP, 131/2025/NĐ-CP, 136/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Đơn đề nghị điều chỉnh quyết định giao đất/cho thuê đất/cho phép chuyển mục đích sử dụng đất theo Mẫu số 03.'
            ]
        },
        {
            id: '1.013827',
            name: 'Điều chỉnh quyết định giao đất, cho thuê đất, cho phép chuyển mục đích sử dụng đất do sai sót về ranh giới, vị trí, diện tích, mục đích sử dụng giữa bản đồ quy hoạch, bản đồ địa chính, quyết định giao đất, cho thuê đất, cho phép chuyển mục đích sử dụng đất và số liệu bàn giao đất trên thực địa',
            level: 'Tỉnh',
            status: 'Thay thế',
            processingTime: '07 ngày làm việc (thông thường) hoặc 25 ngày (vùng khó khăn)',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh;<br>b) Nộp thông qua dịch vụ bưu chính công ích;<br>c) Nộp trực tuyến (Một phần).',
            agency: '(1) UBND cấp tỉnh (2) Chủ tịch UBND cấp tỉnh (3) Cơ quan chuyên môn về nông nghiệp và môi trường cấp tỉnh (4) Văn phòng đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai (5) Cơ quan thuế (nếu có).',
            fees: {
                description: 'Giá dịch vụ và lệ phí được áp dụng theo quy định tại Phụ lục ban hành kèm theo Quyết định 2228/QĐ-UBND. Mức giá cụ thể như sau:',
                details: [
                    { type: 'Phí thẩm định (Sản xuất, kinh doanh)', service: 'Giao đất, cho thuê đất', cost: '4.000.000 VNĐ' },
                    { type: 'Phí thẩm định (Nhà ở)', service: 'Giao đất, cho thuê đất', cost: '300.000 VNĐ' },
                    { type: 'Cấp mới GCN', service: 'Đối với đất', cost: '1.887.000 VNĐ/giấy' },
                    { type: 'Cấp mới GCN', service: 'Đối với tài sản', cost: '2.024.000 VNĐ/giấy' },
                    { type: 'Cấp mới GCN', service: 'Đối với cả đất và tài sản', cost: '2.717.000 VNĐ/giấy' },
                ],
                le_phi: "100.000 VNĐ/giấy.",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Luật Lâm nghiệp; Các Nghị định số 151/2025/NĐ-CP, 102/2024/NĐ-CP, 118/2025/NĐ-CP, 131/2025/NĐ-CP, 136/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Đơn đề nghị điều chỉnh quyết định giao đất/cho thuê đất/cho phép chuyển mục đích sử dụng đất theo Mẫu số 03.'
            ]
        },
        {
            id: '1.013831',
            name: 'Đăng ký biến động quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất trong các trường hợp chuyển đổi quyền sử dụng đất nông nghiệp mà không theo phương án dồn điền, đổi thửa, chuyển nhượng, thừa kế, tặng cho quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất, góp vốn bằng quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất, cho thuê, cho thuê lại quyền sử dụng đất trong dự án xây dựng kinh doanh kết cấu hạ tầng, bán hoặc tặng cho hoặc để thừa kế hoặc góp vốn bằng tài sản gắn liền với đất thuê của Nhà nước theo hình thức thuê đất trả tiền hàng năm',
            level: 'Tỉnh',
            status: 'Thay thế',
            processingTime: 'Không quá 05 ngày làm việc (chuyển đổi, chuyển nhượng, v.v.) hoặc không quá 04 ngày làm việc (cho thuê, cho thuê lại).',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã phường;<br>b) Nộp thông qua dịch vụ bưu chính;<br>c) Nộp trên Cổng Dịch vụ công quốc gia (Một phần).',
            agency: '(1) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai (2) UBND cấp xã (3) Cơ quan Thuế.',
            fees: {
                description: 'Giá dịch vụ và lệ phí được áp dụng theo quy định tại Phụ lục ban hành kèm theo Quyết định 2228/QĐ-UBND. Mức giá cụ thể như sau:',
                details: [
                    { type: 'Cấp mới GCN', service: 'Đối với đất', cost: '1.622.000 VNĐ/giấy' },
                    { type: 'Cấp mới GCN', service: 'Đối với tài sản', cost: '1.591.000 VNĐ/giấy' },
                    { type: 'Cấp mới GCN', service: 'Đối với cả đất và tài sản', cost: '2.082.000 VNĐ/giấy' },
                    { type: 'Chỉnh lý GCN đã cấp', service: 'Đối với đất', cost: '1.405.000 VNĐ/giấy' },
                    { type: 'Chỉnh lý GCN đã cấp', service: 'Đối với tài sản', cost: '1.398.000 VNĐ/giấy' },
                    { type: 'Chỉnh lý GCN đã cấp', service: 'Đối với cả đất và tài sản', cost: '1.806.000 VNĐ/giấy' },
                ],
                le_phi: "100.000 VNĐ/giấy (cấp mới); 500.000 VNĐ/giấy (cấp mới cả đất và tài sản); 25.000 VNĐ/giấy (chỉnh lý).",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 101/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 19/2021/QĐ-UBND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Hợp đồng hoặc văn bản về việc chuyển quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất.',
                'Hợp đồng hoặc văn bản về việc mua bán, góp vốn bằng tài sản gắn liền với đất (đối với đất thuê của Nhà nước).',
                'Văn bản về việc cho thuê, cho thuê lại quyền sử dụng đất.'
            ]
        },
        {
            id: '1.013833',
            name: 'Đăng ký biến động đối với trường hợp đổi tên hoặc thay đổi thông tin về người sử dụng đất, chủ sở hữu tài sản gắn liền với đất hoặc thay đổi số hiệu hoặc địa chỉ của thửa đất, thay đổi hạn chế quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất hoặc có thay đổi quyền đối với thửa đất liền kề, giảm diện tích thửa đất do sạt lở tự nhiên',
            level: 'Tỉnh',
            status: 'Thay thế',
            processingTime: 'Không quá 04 ngày làm việc (đổi tên, thay đổi thông tin); không quá 05 ngày làm việc (thay đổi hạn chế quyền); không quá 10 ngày làm việc (giảm diện tích do sạt lở).',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường;<br>b) Nộp thông qua dịch vụ bưu chính;<br>c) Nộp trên Cổng Dịch vụ công quốc gia (Một phần).',
            agency: '(1) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai (2) Cơ quan Thuế.',
            fees: {
                description: 'Giá dịch vụ và lệ phí được áp dụng theo quy định tại Phụ lục ban hành kèm theo Quyết định 2228/QĐ-UBND. Mức giá cụ thể như sau:',
                details: [
                    { type: 'Cấp mới GCN', service: 'Đối với đất', cost: '1.622.000 VNĐ/giấy' },
                    { type: 'Cấp mới GCN', service: 'Đối với tài sản', cost: '1.591.000 VNĐ/giấy' },
                    { type: 'Cấp mới GCN', service: 'Đối với cả đất và tài sản', cost: '2.082.000 VNĐ/giấy' },
                    { type: 'Đổi tên/thay đổi thông tin', service: 'Đối với đất', cost: '1.350.000 VNĐ/giấy' },
                    { type: 'Đổi tên/thay đổi thông tin', service: 'Đối với tài sản', cost: '1.347.000 VNĐ/giấy' },
                    { type: 'Đổi tên/thay đổi thông tin', service: 'Đối với cả đất và tài sản', cost: '1.734.000 VNĐ/giấy' },
                    { type: 'Thay đổi hạn chế quyền', service: 'Đối với đất', cost: '1.356.000 VNĐ/giấy' },
                    { type: 'Thay đổi hạn chế quyền', service: 'Đối với tài sản', cost: '1.350.000 VNĐ/giấy' },
                    { type: 'Thay đổi hạn chế quyền', service: 'Đối với cả đất và tài sản', cost: '1.743.000 VNĐ/giấy' },
                    { type: 'Giảm diện tích do sạt lở', service: 'Đối với đất', cost: '1.360.000 VNĐ/giấy' },
                    { type: 'Giảm diện tích do sạt lở', service: 'Đối với tài sản', cost: '1.352.000 VNĐ/giấy' },
                    { type: 'Giảm diện tích do sạt lở', service: 'Đối với cả đất và tài sản', cost: '1.747.000 VNĐ/giấy' },
                ],
                le_phi: "100.000 VNĐ/giấy (cấp mới); 500.000 VNĐ/giấy (cấp mới cả đất và tài sản); 25.000 VNĐ/giấy (chỉnh lý).",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 101/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 19/2021/QĐ-UBND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Bản sao hoặc bản chính giấy tờ chứng minh về việc đổi tên, thay đổi thông tin (đối với cá nhân).',
                'Văn bản của cơ quan có thẩm quyền cho phép hoặc công nhận việc đổi tên hoặc thay đổi thông tin (đối với tổ chức, người gốc Việt Nam định cư ở nước ngoài, cộng đồng dân cư).',
                'Văn bản về việc thay đổi quyền của người có quyền lợi liên quan (đối với thay đổi hạn chế quyền hoặc quyền đối với thửa đất liền kề).',
                'Văn bản xác nhận của UBND cấp xã về tình trạng sạt lở tự nhiên (đối với giảm diện tích do sạt lở).'
            ]
        },
        {
            id: '1.013977',
            name: 'Đăng ký biến động thay đổi quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất do chia, tách, hợp nhất, sáp nhập tổ chức hoặc chuyển đổi mô hình tổ chức, chuyển đổi loại hình doanh nghiệp theo quy định của pháp luật về doanh nghiệp, điều chỉnh quy hoạch xây dựng chi tiết, cấp Giấy chứng nhận cho từng thửa đất theo quy hoạch xây dựng chi tiết cho chủ đầu tư dự án có nhu cầu',
            level: 'Tỉnh',
            status: 'Thay thế',
            processingTime: 'Không quá 08 ngày làm việc (thay đổi quyền sử dụng đất do chia, tách, hợp nhất, sáp nhập, chuyển đổi mô hình/loại hình doanh nghiệp) hoặc không quá 05 ngày làm việc (cấp GCN theo quy hoạch xây dựng chi tiết).',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường;<br>b) Nộp thông qua dịch vụ bưu chính;<br>c) Nộp trên Cổng Dịch vụ công quốc gia (Một phần).',
            agency: '(1) Văn phòng Đăng ký đất đai (2) Cơ quan Thuế.',
            fees: {
                description: 'Giá dịch vụ và lệ phí được áp dụng theo quy định tại Phụ lục ban hành kèm theo Quyết định 2228/QĐ-UBND. Mức giá cụ thể như sau:',
                details: [
                    { type: 'Cấp mới GCN', service: 'Đối với đất', cost: '1.622.000 VNĐ/giấy' },
                    { type: 'Cấp mới GCN', service: 'Đối với tài sản', cost: '1.591.000 VNĐ/giấy' },
                    { type: 'Cấp mới GCN', service: 'Đối với cả đất và tài sản', cost: '2.082.000 VNĐ/giấy' },
                    { type: 'Chỉnh lý GCN đã cấp', service: 'Đối với đất', cost: '1.408.000 VNĐ/giấy' },
                    { type: 'Chỉnh lý GCN đã cấp', service: 'Đối với tài sản', cost: '1.397.000 VNĐ/giấy' },
                    { type: 'Chỉnh lý GCN đã cấp', service: 'Đối với cả đất và tài sản', cost: '1.803.000 VNĐ/giấy' },
                ],
                le_phi: "100.000 VNĐ/giấy (cấp mới); 25.000 VNĐ/giấy (chỉnh lý).",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 101/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 19/2021/QĐ-UBND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Giấy chứng nhận đăng ký doanh nghiệp hoặc văn bản về việc thành lập tổ chức sau khi thay đổi.',
                'Quyết định của cơ quan, tổ chức có thẩm quyền hoặc văn bản về việc chia, tách, hợp nhất, sáp nhập, chuyển đổi mô hình tổ chức, chuyển đổi loại hình doanh nghiệp.',
                'Quyết định phê duyệt điều chỉnh quy hoạch xây dựng chi tiết của cơ quan có thẩm quyền kèm theo bản đồ điều chỉnh quy hoạch xây dựng chi tiết và bản đồ địa chính hoặc mảnh trích đo bản đồ địa chính (đối với điều chỉnh quy hoạch).',
                'Quyết định phê duyệt quy hoạch xây dựng chi tiết của cơ quan có thẩm quyền kèm theo bản đồ quy hoạch xây dựng chi tiết và bản đồ địa chính hoặc mảnh trích đo bản đồ địa chính (đối với cấp GCN cho từng thửa đất theo quy hoạch).'
            ]
        },
        {
            id: '1.013980',
            name: 'Đăng ký biến động đối với trường hợp thay đổi quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất theo thỏa thuận của các thành viên hộ gia đình hoặc của vợ và chồng, quyền sử dụng đất xây dựng công trình trên mặt đất phục vụ cho việc vận hành, khai thác sử dụng công trình ngầm, quyền sở hữu công trình ngầm, bán tài sản, điều chuyển, chuyển nhượng quyền sử dụng đất là tài sản công theo quy định của pháp luật về quản lý, sử dụng tài sản công, nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất theo kết quả giải quyết tranh chấp, khiếu nại, tố cáo về đất đai hoặc bản án, quyết định của Tòa án, quyết định thi hành án của cơ quan thi hành án đã được thi hành, quyết định hoặc phán quyết của Trọng tài thương mại Việt Nam về giải quyết tranh chấp giữa các bên phát sinh từ hoạt động thương mại liên quan đến đất đai, nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất do xử lý tài sản thế chấp là quyền sử dụng đất, tài sản gắn liền với đất đã được đăng ký, bao gồm cả xử lý khoản nợ có nguồn gốc từ khoản nợ xấu của tổ chức tín dụng, chi nhánh ngân hàng nước ngoài.',
            level: 'Tỉnh',
            status: 'Thay thế',
            processingTime: 'Không quá 08 ngày làm việc (thỏa thuận, giải quyết tranh chấp, xử lý thế chấp) hoặc không quá 10 ngày làm việc (thay đổi về quyền sử dụng đất xây dựng công trình, bán tài sản công).',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường;<br>b) Nộp thông qua dịch vụ bưu chính;<br>c) Nộp trên Cổng Dịch vụ công quốc gia (Một phần).',
            agency: '(1) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai (2) Cơ quan Thuế.',
            fees: {
                description: 'Giá dịch vụ và lệ phí được áp dụng theo quy định tại Phụ lục ban hành kèm theo Quyết định 2228/QĐ-UBND. Mức giá cụ thể như sau:',
                details: [
                    { type: 'Cấp mới GCN', service: 'Đối với đất', cost: '1.622.000 VNĐ/giấy' },
                    { type: 'Cấp mới GCN', service: 'Đối với tài sản', cost: '1.591.000 VNĐ/giấy' },
                    { type: 'Cấp mới GCN', service: 'Đối với cả đất và tài sản', cost: '2.082.000 VNĐ/giấy' },
                    { type: 'Chỉnh lý GCN đã cấp', service: 'Đối với đất', cost: '1.403.000 VNĐ/giấy' },
                    { type: 'Chỉnh lý GCN đã cấp', service: 'Đối với tài sản', cost: '1.403.000 VNĐ/giấy' },
                    { type: 'Chỉnh lý GCN đã cấp', service: 'Đối với cả đất và tài sản', cost: '1.803.000 VNĐ/giấy' },
                ],
                le_phi: "100.000 VNĐ/giấy (cấp mới); 25.000 VNĐ/giấy (chỉnh lý).",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 101/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 19/2021/QĐ-UBND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Văn bản thỏa thuận về việc thay đổi quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất (đối với thỏa thuận của hộ gia đình hoặc vợ chồng).',
                'Biên bản hòa giải thành hoặc văn bản công nhận kết quả hòa giải thành (đối với giải quyết tranh chấp).',
                'Quyết định của cơ quan có thẩm quyền về giải quyết tranh chấp, khiếu nại, tố cáo về đất đai đã có hiệu lực thi hành.',
                'Quyết định hoặc bản án của Tòa án nhân dân, quyết định về thi hành án của cơ quan thi hành án đã được thi hành.',
                'Quyết định hoặc phán quyết của Trọng tài thương mại Việt Nam.',
                'Hợp đồng chuyển nhượng quyền sử dụng đất, tài sản gắn liền với đất (đối với xử lý tài sản thế chấp).',
                'Văn bản về việc cho phép thay đổi của cơ quan, người có thẩm quyền (đối với thay đổi quyền sử dụng đất xây dựng công trình ngầm).',
                'Văn bản cho phép bán tài sản, điều chuyển, chuyển nhượng quyền sử dụng đất là tài sản công của cơ quan có thẩm quyền (đối với tài sản công).',
                'Hợp đồng mua bán tài sản công là quyền sử dụng đất, tài sản gắn liền với đất (nếu có).'
            ]
        },
        {
            id: '1.013988',
            name: 'Xóa ghi nợ tiền sử dụng đất, lệ phí trước bạ trên Giấy chứng nhận đã cấp.',
            level: 'Tỉnh',
            status: 'Thay thế',
            processingTime: 'Trong ngày làm việc (nếu nhận đủ hồ sơ xóa nợ trước 15 giờ) hoặc ngày làm việc tiếp theo.',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường;<br>b) Nộp thông qua dịch vụ bưu chính;<br>c) Nộp trên Cổng Dịch vụ công quốc gia (Một phần).',
            agency: 'Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai.',
            fees: {
                description: 'Giá dịch vụ và lệ phí được áp dụng theo quy định tại Phụ lục ban hành kèm theo Quyết định 2228/QĐ-UBND. Mức giá cụ thể như sau:',
                details: [
                    { type: 'Cấp mới GCN', service: 'Đối với đất', cost: '1.622.000 VNĐ/giấy' },
                    { type: 'Cấp mới GCN', service: 'Đối với tài sản', cost: '1.591.000 VNĐ/giấy' },
                    { type: 'Cấp mới GCN', service: 'Đối với cả đất và tài sản', cost: '2.082.000 VNĐ/giấy' },
                    { type: 'Chỉnh lý GCN đã cấp', service: 'Đối với đất', cost: '1.403.000 VNĐ/giấy' },
                    { type: 'Chỉnh lý GCN đã cấp', service: 'Đối với tài sản', cost: '1.397.000 VNĐ/giấy' },
                    { type: 'Chỉnh lý GCN đã cấp', service: 'Đối với cả đất và tài sản', cost: '1.803.000 VNĐ/giấy' },
                ],
                le_phi: "25.000 VNĐ (chỉnh lý GCN đã cấp); 100.000 VNĐ (cấp mới GCN).",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 101/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 19/2021/QĐ-UBND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Giấy tờ chứng minh đã hoàn thành việc thanh toán nợ tiền sử dụng đất, lệ phí trước bạ.'
            ]
        },
        {
            id: '1.013992',
            name: 'Đăng ký biến động chuyển mục đích sử dụng đất không phải xin phép cơ quan nhà nước có thẩm quyền.',
            level: 'Tỉnh',
            status: 'Thay thế',
            processingTime: 'Không quá 07 ngày làm việc.',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường;<br>b) Nộp thông qua dịch vụ bưu chính;<br>c) Nộp trên Cổng Dịch vụ công quốc gia (Một phần).',
            agency: '(1) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai (2) Cơ quan Thuế.',
            fees: {
                description: 'Giá dịch vụ và lệ phí được áp dụng theo quy định tại Phụ lục ban hành kèm theo Quyết định 2228/QĐ-UBND. Mức giá cụ thể như sau:',
                details: [
                    { type: 'Cấp mới GCN', service: 'Đối với đất', cost: '1.622.000 VNĐ/giấy' },
                    { type: 'Cấp mới GCN', service: 'Đối với tài sản', cost: '1.591.000 VNĐ/giấy' },
                    { type: 'Cấp mới GCN', service: 'Đối với cả đất và tài sản', cost: '2.082.000 VNĐ/giấy' },
                    { type: 'Chỉnh lý GCN đã cấp', service: 'Đối với đất', cost: '1.410.000 VNĐ/giấy' },
                    { type: 'Chỉnh lý GCN đã cấp', service: 'Đối với tài sản', cost: '1.401.000 VNĐ/giấy' },
                    { type: 'Chỉnh lý GCN đã cấp', service: 'Đối với cả đất và tài sản', cost: '1.813.000 VNĐ/giấy' },
                ],
                le_phi: "100.000 VNĐ/giấy (cấp mới); 25.000 VNĐ/giấy (chỉnh lý).",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 101/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 19/2021/QĐ-UBND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Đơn đăng ký biến động đất đai, tài sản gắn liền với đất theo Mẫu số 18.',
                'Giấy chứng nhận đã cấp.',
                'Một trong các loại giấy tờ liên quan đến nội dung biến động đất đai, tài sản gắn liền với đất (tùy trường hợp cụ thể theo quy định tại Phần II.2 của Phụ lục).'
            ]
        },
        {
            id: '1.013993',
            name: 'Đăng ký, cấp Giấy chứng nhận đối với trường hợp hộ gia đình, cá nhân đang sử dụng đất không đúng mục đích đã được Nhà nước công nhận quyền sử dụng đất trước ngày 01 tháng 7 năm 2014.',
            level: 'Tỉnh',
            status: 'Thay thế',
            processingTime: 'Không quá 12 ngày làm việc.',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường;<br>b) Nộp thông qua dịch vụ bưu chính;<br>c) Nộp trên Cổng Dịch vụ công quốc gia (Một phần).',
            agency: '(1) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai (2) Cơ quan Thuế.',
            fees: {
                description: 'Giá dịch vụ và lệ phí được áp dụng theo quy định tại Phụ lục ban hành kèm theo Quyết định 2228/QĐ-UBND. Mức giá cụ thể như sau:',
                details: [
                    { type: 'Cá nhân (cấp mới)', service: 'Đối với đất', cost: '923.000 VNĐ/giấy' },
                    { type: 'Cá nhân (cấp mới)', service: 'Đối với tài sản', cost: '1.062.000 VNĐ/giấy' },
                    { type: 'Cá nhân (cấp mới)', service: 'Đối với cả đất và tài sản', cost: '1.351.000 VNĐ/giấy' },
                ],
                le_phi: "25.000 VNĐ/giấy.",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 101/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 19/2021/QĐ-UBND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Đơn đăng ký biến động đất đai, tài sản gắn liền với đất theo Mẫu số 18.',
                'Giấy chứng nhận đã cấp.'
            ]
        },
        {
            id: '1.013994',
            name: 'Đăng ký, cấp Giấy chứng nhận đối với trường hợp chuyển nhượng dự án đầu tư có sử dụng đất.',
            level: 'Tỉnh',
            status: 'Thay thế',
            processingTime: 'Không quá 20 ngày làm việc (đất chưa cấp GCN) hoặc không quá 08 ngày làm việc (đất đã cấp GCN).',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường;<br>b) Nộp thông qua dịch vụ bưu chính;<br>c) Nộp trên Cổng Dịch vụ công quốc gia (Một phần).',
            agency: '(1) Văn phòng Đăng ký đất đai (2) Cơ quan có chức năng quản lý đất đai cấp tỉnh (3) Cơ quan Thuế.',
            fees: {
                description: 'Phí thẩm định được quy định như sau:',
                details: [
                    { type: 'Phí thẩm định', service: 'Hồ sơ xin cấp quyền sử dụng đất để sản xuất, kinh doanh', cost: '4.000.000 VNĐ' },
                    { type: 'Phí thẩm định', service: 'Hồ sơ xin cấp quyền sử dụng đất để làm nhà ở', cost: '300.000 VNĐ' },
                ],
                le_phi: "100.000 VNĐ/giấy (cấp mới GCN); 25.000 VNĐ/giấy (đăng ký biến động).",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 101/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 19/2021/QĐ-UBND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Đơn đăng ký đất đai, tài sản gắn liền với đất theo Mẫu số 15 (đối với người đang sử dụng đất của dự án).',
                'Đơn đăng ký biến động đất đai, tài sản gắn liền với đất theo Mẫu số 18 (đối với chuyển nhượng diện tích đất của dự án đã được cấp GCN).',
                'Giấy chứng nhận đã cấp cho bên chuyển nhượng dự án (nếu có).',
                'Chứng từ chứng minh việc hoàn thành nghĩa vụ tài chính (nếu có).',
                'Văn bản cho phép chuyển nhượng dự án hoặc một phần dự án của cơ quan có thẩm quyền.',
                'Hợp đồng chuyển nhượng dự án hoặc một phần dự án.',
                'Bản vẽ tách thửa đất, hợp thửa đất theo Mẫu số 22 (nếu chuyển nhượng một phần dự án).',
                'Mảnh trích đo bản đồ địa chính thửa đất (nếu chuyển nhượng một phần dự án chưa được cấp GCN).'
            ]
        },
        {
            id: '1.013945',
            name: 'Tổ chức kinh tế nhận chuyển nhượng, thuê quyền sử dụng đất, nhận góp vốn bằng quyền sử dụng đất để thực hiện dự án đầu tư.',
            level: 'Tỉnh',
            status: 'Thay thế',
            processingTime: 'Tùy thuộc từng bước, tổng thời gian có thể lên đến 23 ngày làm việc (bao gồm cả thời gian tăng thêm cho vùng khó khăn).',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công;<br>b) Nộp thông qua dịch vụ bưu chính công ích;<br>c) Nộp trực tuyến trên Cổng dịch vụ công (Một phần).',
            agency: 'Chủ tịch Ủy ban nhân dân cấp tỉnh. Cơ quan có chức năng quản lý đất đai cấp tỉnh.',
            fees: {
                description: 'Phí thẩm định được quy định như sau:',
                details: [
                    { type: 'Phí thẩm định', service: 'Hồ sơ xin cấp quyền sử dụng đất để sản xuất, kinh doanh', cost: '4.000.000 VNĐ' },
                    { type: 'Phí thẩm định', service: 'Hồ sơ xin cấp quyền sử dụng đất để làm nhà ở', cost: '300.000 VNĐ' },
                ],
                le_phi: "Không quy định.",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 102/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 19/2021/QĐ-UBND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Văn bản đề nghị chấp thuận cho tổ chức kinh tế nhận chuyển nhượng, thuê quyền sử dụng đất, nhận góp vốn bằng quyền sử dụng đất để thực hiện dự án đầu tư theo Mẫu số 11.',
                'Các giấy tờ chứng minh tư cách pháp lý của tổ chức.',
                'Thông tin về dự án đầu tư (nếu có).'
            ]
        },
        {
            id: '1.013946',
            name: 'Sử dụng đất kết hợp đa mục đích, gia hạn phương án sử dụng đất kết hợp đa mục đích.',
            level: 'Tỉnh',
            status: 'Thay thế',
            processingTime: 'Tùy thuộc từng bước, tổng thời gian có thể lên đến 25 ngày làm việc (thẩm định, phê duyệt) hoặc 17 ngày làm việc (gia hạn) (bao gồm cả thời gian tăng thêm cho vùng khó khăn).',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công;<br>b) Nộp thông qua dịch vụ bưu chính công ích;<br>c) Nộp trực tuyến trên Cổng dịch vụ công (Một phần).',
            agency: 'Chủ tịch Ủy ban nhân dân cấp tỉnh. Cơ quan có chức năng quản lý đất đai cấp tỉnh.',
            fees: {
                description: 'Phí thẩm định được quy định như sau:',
                details: [
                    { type: 'Phí thẩm định', service: 'Hồ sơ xin cấp quyền sử dụng đất để sản xuất, kinh doanh', cost: '4.000.000 VNĐ' },
                    { type: 'Phí thẩm định', service: 'Hồ sơ xin cấp quyền sử dụng đất để làm nhà ở', cost: '300.000 VNĐ' },
                ],
                le_phi: "Không quy định.",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 102/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 19/2021/QĐ-UBND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Văn bản đề nghị sử dụng đất kết hợp đa mục đích theo Mẫu số 13.',
                'Phương án sử dụng đất kết hợp.',
                'Giấy chứng nhận đã cấp hoặc một trong các loại giấy tờ về quyền sử dụng đất (nếu có).'
            ]
        },
        {
            id: '1.013995',
            name: 'Đăng ký tài sản gắn liền với thửa đất đã được cấp Giấy chứng nhận hoặc đăng ký thay đổi về tài sản gắn liền với đất so với nội dung đã đăng ký, gia hạn thời hạn sở hữu nhà ở của tổ chức nước ngoài, cá nhân nước ngoài theo quy định của pháp luật về nhà ở nội dung đã đăng ký.',
            level: 'Tỉnh',
            status: 'Thay thế',
            processingTime: 'Không quá 08 ngày làm việc (đăng ký quyền sở hữu, gia hạn) hoặc không quá 05 ngày làm việc (đăng ký thay đổi).',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường;<br>b) Nộp thông qua dịch vụ bưu chính;<br>c) Nộp trên Cổng Dịch vụ công quốc gia (Một phần).',
            agency: '(1) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai (2) Cơ quan Thuế.',
            fees: {
                description: 'Giá dịch vụ và lệ phí được áp dụng theo quy định tại Phụ lục ban hành kèm theo Quyết định 2228/QĐ-UBND. Mức giá cụ thể như sau:',
                details: [
                    { type: 'Cấp mới GCN', service: 'Đối với đất', cost: '1.622.000 VNĐ/giấy' },
                    { type: 'Cấp mới GCN', service: 'Đối với tài sản', cost: '1.591.000 VNĐ/giấy' },
                    { type: 'Cấp mới GCN', service: 'Đối với cả đất và tài sản', cost: '2.082.000 VNĐ/giấy' },
                    { type: 'Chỉnh lý GCN đã cấp', service: 'Đối với đất', cost: '1.403.000 VNĐ/giấy' },
                    { type: 'Chỉnh lý GCN đã cấp', service: 'Đối với tài sản', cost: '1.397.000 VNĐ/giấy' },
                    { type: 'Chỉnh lý GCN đã cấp', service: 'Đối với cả đất và tài sản', cost: '1.817.000 VNĐ/giấy' },
                ],
                le_phi: "100.000 VNĐ/giấy (cấp mới); 25.000 VNĐ/giấy (chỉnh lý).",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 101/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 19/2021/QĐ-UBND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Giấy tờ theo quy định tại các Điều 148, Điều 149 Luật Đất đai (nếu có), sơ đồ nhà ở, công trình xây dựng.',
                'Hồ sơ thiết kế xây dựng công trình đã được thẩm định hoặc văn bản chấp thuận kết quả nghiệm thu hoàn thành hạng mục công trình (đối với chứng nhận quyền sở hữu công trình xây dựng trên đất nông nghiệp).',
                'Văn bản chấp thuận gia hạn thời hạn sở hữu nhà ở của cơ quan có thẩm quyền (đối với gia hạn thời hạn sở hữu nhà ở của tổ chức nước ngoài, cá nhân nước ngoài).'
            ]
        },
        {
            id: '1.013947',
            name: 'Xác nhận tiếp tục sử dụng đất nông nghiệp.',
            level: 'Tỉnh',
            status: 'Thay thế',
            processingTime: 'Không quá 07 ngày làm việc.',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công tỉnh, xã, phường;<br>b) Nộp thông qua dịch vụ bưu chính;<br>c) Nộp trên Cổng Dịch vụ công quốc gia (Một phần).',
            agency: 'Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai.',
            fees: {
                description: 'Giá dịch vụ và lệ phí được áp dụng theo quy định tại Phụ lục ban hành kèm theo Quyết định 2228/QĐ-UBND. Mức giá cụ thể như sau:',
                details: [
                    { type: 'Cấp mới GCN', service: 'Tổ chức', cost: '1.622.000 VNĐ/giấy' },
                    { type: 'Cấp mới GCN', service: 'Hộ gia đình, cá nhân', cost: '923.000 VNĐ/giấy' },
                    { type: 'Chỉnh lý GCN đã cấp', service: 'Tổ chức', cost: '1.399.000 VNĐ/giấy' },
                    { type: 'Chỉnh lý GCN đã cấp', service: 'Hộ gia đình, cá nhân', cost: '626.000 VNĐ/giấy' },
                ],
                le_phi: "100.000 VNĐ/giấy (cấp mới GCN tổ chức); 25.000 VNĐ/giấy (chỉnh lý GCN tổ chức); 25.000 VNĐ/giấy (hộ gia đình, cá nhân).",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 102/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 19/2021/QĐ-UBND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Đơn đề nghị gia hạn sử dụng đất theo Mẫu số 04.'
            ]
        },
        {
            id: '1.013949',
            name: 'Giao đất, cho thuê đất, chuyển mục đích sử dụng đất đối với trường hợp giao đất, cho thuê đất không đấu giá quyền sử dụng đất, không đấu thầu lựa chọn nhà đầu tư thực hiện dự án có sử dụng đất, trường hợp giao đất, cho thuê đất thông qua đấu thầu lựa chọn nhà đầu tư thực hiện dự án có sử dụng đất, giao đất và giao rừng, cho thuê đất và cho thuê rừng, gia hạn sử dụng đất khi hết thời hạn sử dụng đất.',
            level: 'Xã',
            status: 'Thay thế',
            processingTime: 'Không quá 15 ngày làm việc (thông thường) hoặc không quá 25 ngày (vùng khó khăn).',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công cấp xã;<br>b) Nộp thông qua dịch vụ bưu chính công ích;<br>c) Nộp trực tuyến trên Cổng dịch vụ công quốc gia (Một phần).',
            agency: 'Chủ tịch Ủy ban nhân dân cấp xã. Cơ quan chuyên môn về nông nghiệp và môi trường cấp xã.',
            fees: {
                description: 'Phí thẩm định được quy định như sau:',
                details: [
                    { type: 'Phí thẩm định', service: 'Hồ sơ xin cấp quyền sử dụng đất để sản xuất, kinh doanh', cost: '4.000.000 VNĐ' },
                    { type: 'Phí thẩm định', service: 'Hồ sơ xin cấp quyền sử dụng đất để làm nhà ở', cost: '300.000 VNĐ' },
                ],
                le_phi: "25.000 VNĐ/giấy.",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 102/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 19/2021/QĐ-UBND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Đơn đề nghị giao đất/thuê đất/chuyển mục đích sử dụng đất/thuê đất và thuê rừng theo Mẫu số 01.',
                'Dự án đầu tư đối với khu rừng đề nghị giao; báo cáo điều tra, đánh giá hiện trạng rừng và bản đồ hiện trạng rừng (đối với giao đất và giao rừng).',
                'Phương án sử dụng tầng đất mặt theo Mẫu số 26 (đối với chuyển mục đích sử dụng đất chuyên trồng lúa).',
                'Một trong các loại giấy tờ sau: Bản sao văn bản phê duyệt kết quả lựa chọn nhà đầu tư; Bản sao văn bản phê duyệt dự án đầu tư, quyết định chấp thuận chủ trương đầu tư; Bản sao văn bản của cơ quan nhà nước có thẩm quyền chấp thuận nhà đầu tư; Bản sao văn bản về kết quả đấu giá quyền sử dụng đất không thành; Bản sao văn bản về kết quả thực hiện việc nhận chuyển nhượng dự án bất động sản; Bản sao các văn bản theo quy định của pháp luật đối với trường hợp phải thu hồi đất; Một trong các Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất hoặc giấy tờ quy định tại Điều 137 Luật Đất đai hoặc quyết định giao đất, cho thuê đất, cho phép chuyển mục đích sử dụng đất của cơ quan nhà nước có thẩm quyền.'
            ]
        },
        {
            id: '1.013950',
            name: 'Chuyển hình thức giao đất, cho thuê đất.',
            level: 'Xã',
            status: 'Thay thế',
            processingTime: 'Không quá 15 ngày làm việc (thông thường) hoặc không quá 25 ngày (vùng khó khăn).',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công cấp xã;<br>b) Nộp thông qua dịch vụ bưu chính công ích;<br>c) Nộp trực tuyến trên Cổng dịch vụ công quốc gia (Một phần).',
            agency: 'Chủ tịch Ủy ban nhân dân cấp xã. Cơ quan chuyên môn về nông nghiệp và môi trường cấp xã.',
            fees: {
                description: 'Phí thẩm định được quy định như sau:',
                details: [
                    { type: 'Phí thẩm định', service: 'Hồ sơ xin cấp quyền sử dụng đất để sản xuất, kinh doanh', cost: '4.000.000 VNĐ' },
                    { type: 'Phí thẩm định', service: 'Hồ sơ xin cấp quyền sử dụng đất để làm nhà ở', cost: '300.000 VNĐ' },
                ],
                le_phi: "25.000 VNĐ/giấy.",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 102/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 19/2021/QĐ-UBND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Đơn đề nghị chuyển hình thức giao đất/cho thuê đất theo Mẫu số 02.',
                'Một trong các giấy tờ sau: Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất; giấy tờ quy định tại Điều 137 Luật Đất đai; Quyết định giao đất, cho thuê đất, cho phép chuyển mục đích sử dụng đất của cơ quan nhà nước có thẩm quyền.'
            ]
        },
        {
            id: '1.013952',
            name: 'Điều chỉnh quyết định giao đất, cho thuê đất, cho phép chuyển mục đích sử dụng đất do thay đổi căn cứ quyết định giao đất, cho thuê đất, cho phép chuyển mục đích sử dụng đất, điều chỉnh thời hạn sử dụng đất của dự án đầu tư.',
            level: 'Xã',
            status: 'Thay thế',
            processingTime: 'Không quá 15 ngày làm việc (thông thường) hoặc không quá 15/25 ngày (vùng khó khăn).',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công cấp xã;<br>b) Nộp thông qua dịch vụ bưu chính công ích;<br>c) Nộp trực tuyến trên Cổng dịch vụ công quốc gia (Một phần).',
            agency: 'Chủ tịch Ủy ban nhân dân cấp xã. Cơ quan chuyên môn về nông nghiệp và môi trường cấp xã.',
            fees: {
                description: 'Phí thẩm định được quy định như sau:',
                details: [
                    { type: 'Phí thẩm định', service: 'Hồ sơ xin cấp quyền sử dụng đất để sản xuất, kinh doanh', cost: '4.000.000 VNĐ' },
                    { type: 'Phí thẩm định', service: 'Hồ sơ xin cấp quyền sử dụng đất để làm nhà ở', cost: '300.000 VNĐ' },
                ],
                le_phi: "25.000 VNĐ/giấy.",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 102/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 19/2021/QĐ-UBND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Đơn đề nghị điều chỉnh quyết định giao đất/cho thuê đất/cho phép chuyển mục đích sử dụng đất theo Mẫu số 03.'
            ]
        },
        {
            id: '1.013953',
            name: 'Điều chỉnh quyết định giao đất, cho thuê đất, cho phép chuyển mục đích sử dụng đất do sai sót về ranh giới, vị trí, diện tích, mục đích sử dụng giữa bản đồ quy hoạch, bản đồ địa chính, quyết định giao đất, cho thuê đất, cho phép chuyển mục đích sử dụng đất và số liệu bàn giao đất trên thực địa.',
            level: 'Xã',
            status: 'Thay thế',
            processingTime: 'Không quá 15 ngày làm việc (thông thường) hoặc không quá 25 ngày (vùng khó khăn).',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công cấp xã;<br>b) Nộp thông qua dịch vụ bưu chính công ích;<br>c) Nộp trực tuyến trên Cổng dịch vụ công quốc gia (Một phần).',
            agency: 'Chủ tịch Ủy ban nhân dân cấp xã. Cơ quan chuyên môn về nông nghiệp và môi trường cấp xã.',
            fees: {
                description: 'Phí thẩm định được quy định như sau:',
                details: [
                    { type: 'Phí thẩm định', service: 'Hồ sơ xin cấp quyền sử dụng đất để sản xuất, kinh doanh', cost: '4.000.000 VNĐ' },
                    { type: 'Phí thẩm định', service: 'Hồ sơ xin cấp quyền sử dụng đất để làm nhà ở', cost: '300.000 VNĐ' },
                ],
                le_phi: "25.000 VNĐ/giấy.",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 102/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 19/2021/QĐ-UBND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Đơn đề nghị điều chỉnh quyết định giao đất/cho thuê đất/cho phép chuyển mục đích sử dụng đất theo Mẫu số 03.'
            ]
        },
        {
            id: '1.013962',
            name: 'Giao đất ở có thu tiền sử dụng đất không thông qua đấu giá, không đấu thầu lựa chọn nhà đầu tư thực hiện dự án có sử dụng đất đối với cá nhân là cán bộ, công chức, viên chức, sĩ quan tại ngũ, quân nhân chuyên nghiệp, công chức quốc phòng, công nhân và viên chức quốc phòng, sĩ quan, hạ sĩ quan, công nhân công an, người làm công tác cơ yếu và người làm công tác khác trong tổ chức cơ yếu hưởng lương từ ngân sách nhà nước mà chưa được giao đất ở, nhà ở, giáo viên, nhân viên y tế đang công tác tại các xã biên giới, hải đảo thuộc vùng có điều kiện kinh tế - xã hội khó khăn, vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn nhưng chưa có đất ở, nhà ở tại nơi công tác hoặc chưa được hưởng chính sách hỗ trợ về nhà ở theo quy định của pháp luật về nhà ở.',
            level: 'Xã',
            status: 'Thay thế',
            processingTime: 'Không quá 35 ngày làm việc (thông thường) hoặc không quá 45 ngày (vùng khó khăn).',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công cấp xã, hành chính cấp xã dịch vụ bưu chính công ích;<br>b) Nộp trên cổng dịch vụ công quốc gia (Một phần).',
            agency: 'Chủ tịch Ủy ban nhân dân cấp xã. Cơ quan chuyên môn về nông nghiệp và môi trường cấp xã.',
            fees: {
                description: 'Phí, lệ phí được áp dụng theo quy định tại Phụ lục ban hành kèm theo Quyết định 2228/QĐ-UBND. Mức giá cụ thể như sau:',
                details: [
                    { type: 'Phí thẩm định', service: 'Hồ sơ xin cấp quyền sử dụng đất để sản xuất, kinh doanh', cost: '4.000.000 VNĐ' },
                    { type: 'Phí thẩm định', service: 'Hồ sơ xin cấp quyền sử dụng đất để làm nhà ở', cost: '300.000 VNĐ' },
                ],
                le_phi: "Không quy định.",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 102/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 19/2021/QĐ-UBND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Đơn đề nghị giao đất ở theo Mẫu số 01.',
                'Giấy tờ chứng minh đối tượng được hưởng chính sách hỗ trợ về đất ở (ví dụ: xác nhận công tác, xác nhận chưa có đất ở/nhà ở).'
            ]
        },
        {
            id: '1.013978',
            name: 'Đăng ký đất đai, tài sản gắn liền với đất, cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất lần đầu đối với cá nhân, cộng đồng dân cư, hộ gia đình, người gốc Việt Nam định cư ở nước ngoài.',
            level: 'Xã',
            status: 'Thay thế',
            processingTime: '17 ngày làm việc (đăng ký lần đầu) hoặc 20 ngày làm việc (đăng ký, cấp GCN lần đầu) hoặc 27/30 ngày làm việc (vùng khó khăn).',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công phường, xã;<br>b) Nộp thông qua dịch vụ bưu chính công ích;<br>c) Nộp trên cổng dịch vụ công quốc gia (Một phần).',
            agency: '(1) Ủy ban nhân dân cấp xã (2) Chủ tịch Ủy ban nhân dân cấp xã (3) Chi nhánh Văn phòng đăng ký đất đai (4) Cơ quan thuế (nếu có).',
            fees: {
                description: 'Phí thẩm định được quy định như sau:',
                details: [
                    { type: 'Phí thẩm định', service: 'Hồ sơ xin cấp quyền sử dụng đất để sản xuất, kinh doanh', cost: '4.000.000 VNĐ' },
                    { type: 'Phí thẩm định', service: 'Hồ sơ xin cấp quyền sử dụng đất để làm nhà ở', cost: '300.000 VNĐ' },
                ],
                le_phi: "25.000 VNĐ (đất); 100.000 VNĐ (đất và tài sản).",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 101/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 19/2021/QĐ-UBND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Đơn đăng ký đất đai, tài sản gắn liền với đất theo Mẫu số 15.',
                'Các giấy tờ quy định tại Điều 137, khoản 1, khoản 5 Điều 148, khoản 1, khoản 5 Điều 149 Luật Đất đai, sơ đồ nhà ở, công trình xây dựng (nếu có).',
                'Giấy tờ về việc nhận thừa kế quyền sử dụng đất (nếu có).',
                'Giấy tờ về giao đất không đúng thẩm quyền hoặc giấy tờ về việc mua, nhận thanh lý, hóa giá, phân phối nhà ở, công trình xây dựng gắn liền với đất (nếu có).',
                'Giấy tờ liên quan đến xử phạt vi phạm hành chính (nếu có).',
                'Hợp đồng hoặc văn bản thỏa thuận hoặc quyết định của Tòa án về việc xác lập quyền đối với thửa đất liền kề (nếu có).',
                'Văn bản xác định các thành viên có chung quyền sử dụng đất của hộ gia đình (nếu có).',
                'Mảnh trích đo bản đồ địa chính thửa đất (nếu có).',
                'Hồ sơ thiết kế xây dựng công trình đã được thẩm định hoặc văn bản chấp thuận kết quả nghiệm thu hoàn thành hạng mục công trình (đối với chứng nhận quyền sở hữu công trình xây dựng trên đất nông nghiệp).',
                'Chứng từ đã thực hiện nghĩa vụ tài chính, giấy tờ liên quan đến việc miễn, giảm nghĩa vụ tài chính (nếu có).',
                'Giấy tờ về việc chuyển quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất có chữ ký của bên chuyển quyền và bên nhận chuyển quyền (nếu chưa thực hiện thủ tục chuyển quyền).',
                'Giấy xác nhận của cơ quan có chức năng quản lý về xây dựng cấp huyện về đủ điều kiện tồn tại nhà ở, công trình xây dựng (nếu có).'
            ]
        },
        {
            id: '1.013979',
            name: 'Tặng cho quyền sử dụng đất cho Nhà nước hoặc cộng đồng dân cư hoặc mở rộng đường giao thông đối với trường hợp thửa đất chưa được cấp Giấy chứng nhận.',
            level: 'Xã',
            status: 'Thay thế',
            processingTime: 'Không quá 10 ngày làm việc.',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công cấp xã;<br>b) Nộp thông qua dịch vụ bưu chính công ích;<br>c) Nộp trên cổng dịch vụ công quốc gia (Một phần).',
            agency: '(1) Ủy ban nhân dân cấp xã (2) Cơ quan có chức năng quản lý đất đai cấp xã (3) Văn phòng Đăng ký đất đai hoặc Chi nhánh Văn phòng Đăng ký đất đai.',
            fees: {
                description: 'Phí thẩm định được quy định như sau:',
                details: [
                    { type: 'Phí thẩm định', service: 'Hồ sơ xin cấp quyền sử dụng đất để sản xuất, kinh doanh', cost: '4.000.000 VNĐ' },
                    { type: 'Phí thẩm định', service: 'Hồ sơ xin cấp quyền sử dụng đất để làm nhà ở', cost: '300.000 VNĐ' },
                ],
                le_phi: "25.000 VNĐ/giấy.",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 102/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 19/2021/QĐ-UBND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Văn bản tặng cho quyền sử dụng đất hoặc biên bản họp giữa đại diện thôn, ấp, làng, bản, buôn, bom, phum, sóc, tổ dân phố, điểm dân cư với người sử dụng đất về việc tặng cho quyền sử dụng đất.',
                'Giấy chứng nhận đã cấp (nếu có).'
            ]
        },
        {
            id: '1.013965',
            name: 'Sử dụng đất kết hợp đa mục đích, gia hạn phương án sử dụng đất kết hợp đa mục đích.',
            level: 'Xã',
            status: 'Thay thế',
            processingTime: 'Tùy thuộc từng bước, tổng thời gian có thể lên đến 25 ngày làm việc (phê duyệt) hoặc 17 ngày làm việc (gia hạn) (bao gồm cả thời gian tăng thêm cho vùng khó khăn).',
            agency: 'Chủ tịch Ủy ban nhân dân cấp xã; Cơ quan có chức năng quản lý đất đai cấp xã.',
            fees: {
                description: 'Phí thẩm định được quy định như sau:',
                details: [
                    { type: 'Phí thẩm định', service: 'Hồ sơ xin cấp quyền sử dụng đất để sản xuất, kinh doanh', cost: '4.000.000 VNĐ' },
                    { type: 'Phí thẩm định', service: 'Hồ sơ xin cấp quyền sử dụng đất để làm nhà ở', cost: '300.000 VNĐ' },
                ],
                le_phi: "Không quy định.",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 102/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Các Nghị quyết của HĐND tỉnh Đồng Nai và tỉnh Bình Phước; Quyết định 19/2021/QĐ-UBND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Văn bản đề nghị sử dụng đất kết hợp đa mục đích theo Mẫu số 13.',
                'Phương án sử dụng đất kết hợp.',
                'Giấy chứng nhận đã cấp hoặc một trong các loại giấy tờ về quyền sử dụng đất (nếu có).'
            ]
        },
        {
            id: '1.013967',
            name: 'Giải quyết tranh chấp đất đai thuộc thẩm quyền của Chủ tịch Ủy ban nhân dân cấp xã.',
            level: 'Xã',
            status: 'Thay thế',
            processingTime: 'Không quá 45 ngày kể từ ngày thụ lý đơn yêu cầu giải quyết tranh chấp đất đai (thông thường) hoặc không quá 60 ngày (vùng khó khăn).',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công hoặc Ủy ban nhân dân cấp xã;<br>b) Nộp thông qua dịch vụ bưu chính công ích;<br>c) Nộp trực tuyến trên Cổng dịch vụ công (Một phần).',
            agency: 'Chủ tịch UBND cấp xã; Các phòng ban chuyên môn của cấp xã hoặc tương đương.',
            fees: {
                description: 'Phí, lệ phí được áp dụng theo quy định của Luật phí và lệ phí và các văn bản quy phạm pháp luật hướng dẫn Luật phí và lệ phí.',
                details: [],
                le_phi: "Theo quy định của pháp luật về phí, lệ phí và các văn bản hướng dẫn.",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Nghị định số 102/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP; Nghị định số 151/2025/NĐ-CP; Nghị quyết 13/2015/NQ-HĐND tỉnh Bình Phước.',
            notes: 'Nội dung TTHC thực hiện theo Quyết định số 2304/QĐ-BNNMT ngày 23/6/2025 của Bộ Nông nghiệp và Môi trường.',
            requiredDocs: [
                'Đơn yêu cầu giải quyết tranh chấp đất đai.',
                'Biên bản làm việc của các bên tranh chấp, biên bản kiểm tra hiện trạng tranh chấp, biên bản hòa giải (nếu có).',
                'Trích lục bản đồ, hồ sơ địa chính, dữ liệu ảnh viễn thám liên quan đến diện tích đất tranh chấp (nếu có) và các tài liệu làm chứng cứ.',
                'Báo cáo đề xuất và dự thảo quyết định giải quyết tranh chấp hoặc dự thảo quyết định công nhận hòa giải thành.'
            ]
        },
        {
            id: '1.012812',
            name: 'Hòa giải tranh chấp đất đai thuộc thẩm quyền cấp xã',
            level: 'Xã',
            status: 'Giữ nguyên',
            processingTime: 'Không quá 30 ngày kể từ ngày nhận được đơn yêu cầu hòa giải tranh chấp đất đai.',
            location: 'a) Nộp trực tiếp tại Trung tâm Phục vụ hành chính công hoặc Ủy ban nhân dân cấp xã;<br>b) Nộp thông qua dịch vụ bưu chính công ích;<br>c) Nộp trực tuyến trên Cổng dịch vụ công (Một phần).',
            agency: 'UBND cấp xã',
            fees: {
                description: 'Phí, lệ phí được áp dụng theo quy định của Luật phí và lệ phí và các văn bản quy phạm pháp luật hướng dẫn Luật phí và lệ phí.',
                details: [],
                le_phi: "Không quy định.",
                exemption: 'Miễn giảm 100% theo Nghị quyết 21/2024/NQ-HĐND ngày 29/11/2024.'
            },
            legalBasis: 'Luật Đất đai số 31/2024/QH15; Luật số 43/2024/QH15; Nghị định số 102/2024/NĐ-CP; Nghị định số 118/2025/NĐ-CP.',
            notes: 'Thủ tục này không thay đổi so với quy định trước đây.',
            requiredDocs: [
                'Đơn yêu cầu hòa giải.',
                'Các giấy tờ chứng minh quyền sử dụng đất, tài liệu liên quan đến tranh chấp.',
                'Biên bản hòa giải tại UBND cấp xã (nếu có).'
            ]
        },
        {
            id: '1.012819',
            name: 'Cấp lại Giấy chứng nhận do bị mất',
            level: 'Huyện',
            status: 'Bãi bỏ',
            processingTime: 'Không áp dụng',
            location: 'Không áp dụng',
            agency: 'Văn phòng đăng ký đất đai; Chi nhánh Văn phòng đăng ký đất đai',
            fees: {
                description: 'Không áp dụng.',
                details: [],
                le_phi: "Không áp dụng.",
                exemption: 'Không áp dụng.'
            },
            legalBasis: 'Nghị định số 151/2025/NĐ-CP ngày 12/6/2025 của Chính phủ.',
            notes: 'Thủ tục này đã được bãi bỏ. Người dân cần thực hiện thủ tục cấp lại Giấy chứng nhận tại cấp tỉnh (Mã TTHC 1.012786).',
            requiredDocs: ['Không áp dụng.']
        },
        // New procedures based on Nghị định 99/2022/NĐ-CP and Nghị quyết số 23/2024/NQ-HĐND
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
    
    const detailsPanel = document.getElementById('details-panel');
    const detailsTitle = document.getElementById('details-title');
    const backToListBtn = document.getElementById('back-to-list-btn');
    
    const detailsTabs = document.querySelectorAll('.details-tab');
    const detailsTabPanes = document.querySelectorAll('.details-tab-pane');

    // --- HELPER FUNCTIONS ---
    function getStatusClass(status) {
        const statusMap = {
            'Sửa đổi': 'status-suadoi', 'Thay thế': 'status-thaythe',
            'Giữ nguyên': 'status-giunguyen', 'Bãi bỏ': 'status-baibo', 'Mới': 'status-moi'
        };
        return statusMap[status] || 'bg-slate-100 text-slate-800';
    }

    // --- CORE LOGIC ---

    function applyFilters() {
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
    }

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
                <div class="flex justify-between items-center mb-2">
                    <p class="text-xs font-semibold text-slate-500">${p.id}</p>
                    <span class="card-badge ${getStatusClass(p.status)}">${p.status}</span>
                </div>
                <h4 class="font-semibold text-slate-800 text-sm line-clamp-2">${p.name}</h4>
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

        detailsPanel.classList.add('is-visible');
        detailsTitle.textContent = procedure.name;

        document.getElementById('tab-content-details').innerHTML = `
            <div class="space-y-6 text-sm">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    <div><p class="font-semibold text-slate-600">Mã thủ tục</p><p class="text-slate-800 font-medium">${procedure.id}</p></div>
                    <div><p class="font-semibold text-slate-600">Cấp thực hiện</p><p class="text-slate-800 font-medium">${procedure.level}</p></div>
                    <div class="col-span-1 sm:col-span-2"><p class="font-semibold text-slate-600">Thời hạn giải quyết</p><p class="text-slate-800 font-medium">${procedure.processingTime}</p></div>
                </div>
                <div class="border-t border-slate-200"></div>
                <div><p class="font-semibold text-slate-600 mb-1">Địa điểm thực hiện</p><p class="leading-relaxed">${procedure.location}</p></div>
                <div><p class="font-semibold text-slate-600 mb-1">Cơ quan thực hiện</p><p class="leading-relaxed">${procedure.agency}</p></div>
                <div class="bg-slate-50 p-4 rounded-lg"><p class="font-semibold text-slate-700 mb-1">Ghi chú</p><p class="leading-relaxed text-slate-600">${procedure.notes || 'Không có'}</p></div>
                <div><p class="font-semibold text-slate-600 mb-1">Căn cứ pháp lý</p><p class="text-xs leading-relaxed text-slate-500">${procedure.legalBasis || 'Không có'}</p></div>
            </div>`;

        document.getElementById('tab-content-documents').innerHTML = `
            <ul class="list-disc list-inside space-y-3 text-sm leading-relaxed text-slate-700">
                ${procedure.requiredDocs.map(doc => `<li>${doc}</li>`).join('')}
            </ul>`;

        const feesContent = `
            <div class="space-y-5 text-sm">
                <p class="leading-relaxed">${procedure.fees.description || 'Không có thông tin.'}</p>
                ${procedure.fees.details && procedure.fees.details.length > 0 ? `
                <div class="overflow-x-auto rounded-lg border border-slate-200">
                    <table class="min-w-full text-sm">
                        <thead class="bg-slate-100">
                            <tr>
                                <th class="p-3 text-left font-semibold text-slate-600">Đối tượng</th>
                                <th class="p-3 text-left font-semibold text-slate-600">Dịch vụ</th>
                                <th class="p-3 text-left font-semibold text-slate-600">Chi phí</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white">
                            ${procedure.fees.details.map(item => `
                            <tr class="border-t border-slate-200">
                                <td class="p-3">${item.type}</td>
                                <td class="p-3">${item.service}</td>
                                <td class="p-3 font-medium">${item.cost}</td>
                            </tr>`).join('')}
                        </tbody>
                    </table>
                </div>` : ''}
                <div><p class="font-semibold text-slate-600">Lệ phí</p><p>${procedure.fees.le_phi || 'Không quy định.'}</p></div>
                ${procedure.fees.exemption ? `<div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-md"><p class="font-semibold text-blue-800">Thông tin miễn giảm</p><p class="text-blue-700 leading-relaxed">${procedure.fees.exemption}</p></div>` : ''}
            </div>`;
        document.getElementById('tab-content-fees').innerHTML = feesContent;

        switchTab('details');
    }

    function switchTab(tabId) {
        detailsTabs.forEach(tab => {
            const isSelected = tab.dataset.tab === tabId;
            tab.classList.toggle('border-blue-500', isSelected);
            tab.classList.toggle('text-blue-600', isSelected);
            tab.classList.toggle('border-transparent', !isSelected);
            tab.classList.toggle('text-slate-500', !isSelected);
            tab.classList.toggle('hover:text-slate-700', !isSelected);
            tab.classList.toggle('hover:border-slate-300', !isSelected);
        });
        detailsTabPanes.forEach(pane => {
            pane.classList.toggle('hidden', pane.id !== `tab-content-${tabId}`);
        });
    }
    
    function hideDetailsPanel() {
        detailsPanel.classList.remove('is-visible');
        document.querySelectorAll('#procedure-list button').forEach(btn => btn.classList.remove('active-procedure'));
    }

    // --- INITIALIZATION & EVENT LISTENERS ---

    [searchInput, levelFilter, statusFilter].forEach(el => {
        el.addEventListener('input', applyFilters);
        el.addEventListener('change', applyFilters);
    });

    detailsTabs.forEach(tab => {
        tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });

    backToListBtn.addEventListener('click', hideDetailsPanel);

    // Initialize statistic counters
    document.getElementById('count-suadoi').textContent = procedures.filter(p => p.status === 'Sửa đổi').length;
    document.getElementById('count-thaythe').textContent = procedures.filter(p => p.status === 'Thay thế').length;
    document.getElementById('count-giunguyen').textContent = procedures.filter(p => p.status === 'Giữ nguyên').length;
    document.getElementById('count-baibo').textContent = procedures.filter(p => p.status === 'Bãi bỏ').length;
    document.getElementById('count-moi').textContent = procedures.filter(p => p.status === 'Mới').length;
    
    // Initial render of all procedures
    applyFilters();
});